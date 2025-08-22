import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import "./../Style/search.css";

const Search = () => {
  const { restaurants = [], addItem } = useOutletContext();
  const [query, setQuery] = useState("");

  // Filter restaurants safely using res.info.name
  const filterRestaurants = (restaurants || []).filter((res) =>
    (res?.info?.name || "").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <h1 className="search-title">🔍 Search Restaurants </h1>

      {/* Input box */}
      <input
        className="search-input"
        type="text"
        placeholder="Search by restaurant name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Show results */}
      <div className="search-result">
        {filterRestaurants.length > 0 ? (
          filterRestaurants.map((res) => (
            <div key={res.info.id} className="search-card">
              <img
                className="search-card-img"
                alt={res.info.name}
                src={`/images/${res.info.cloudinaryImageId}.avif`}
              ></img>
              <div className="search-card-details">
                <h3>{res.info.name}</h3>
                <p>{res.info.cuisine}</p>
                <p>⭐ {res.info.rating}</p>
                <div className="search-card-actions">
                  <Link to={`/restaurant/${res.info.id}`} className="view-btn">
                    View
                  </Link>
                  <button onClick={() => addItem(res)} className="add-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No restaurants found!</p>
        )}
      </div>
    </div>
  );
};

export default Search;
