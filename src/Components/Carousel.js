import { useOutletContext } from "react-router-dom";
import "./../Style/carousel.css";
import Card from "./card";
import { useRef } from "react";
const Carousel = () => {
    const {restaurants}=useOutletContext();

    const slidesContainerRef = useRef(null);

    const handlePrevClick = ()=>{
        const slideWidth= slidesContainerRef.current.clientWidth;
        slidesContainerRef.current.scrollLeft -= slideWidth;

 }

    const handleNextClick = ()=>{
         const slideWidth= slidesContainerRef.current.clientWidth;
        slidesContainerRef.current.scrollLeft += slideWidth;

         }
    return( 
        <div className="carousel">
            <div className="carousel__container">
            <div className="carousel__title">
                <h2>Top Restaurants Chain in Nagpur</h2>
            </div>
            <div className="carousel__controls">
                <button className="carousel__arrow" onClick={handlePrevClick}>
                    <img src="/images/left.png" alt="a"></img>
                </button>
                 <button className="carousel__arrow" onClick={handleNextClick}>
                    <img src="/images/right.png" alt="b"></img>
                </button>
            </div>
            </div>
            <section className="carousel__slider">
                <ul className="carousel__slides" ref={slidesContainerRef}>
                    {restaurants.map((res)=>{
                        return(
                            <li className="carousel__slide" key={res.info.id}>
                                <Card res={res.info} show={false}></Card>
                            </li>
                        )
                    }

                    
                    )}
                </ul>
            </section>

        </div>
       
    );
}
 export default Carousel;