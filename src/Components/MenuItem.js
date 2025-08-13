import MenuItemShow from "./MenuItemShow";

const MenuItem = ({res , addItem , removeItem , cartItems})=> {
       const title = res?.card?.card.title;
    return(
          <div className="restaurant__menu-category" key={title}>
              <div className="restaurant__menu-title">
                <p>
                  {title} ({res?.card?.card.itemCards.length}){" "}
                </p>
              </div>
              <div className="restaurant__menu-items">
                {res.card?.card.itemCards &&
                  res.card?.card.itemCards.map((r) => {
                    return (
                      <MenuItemShow r={r.card.info} addItem={addItem} removeItem={removeItem} cartItems={cartItems}></MenuItemShow>
                    );
                  })}
              </div>
            </div>
    )
}
export default MenuItem;