import React, { useState, useEffect, useRef } from "react";
import AccIcon from "../assets/JohnnyBravo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useDispatch, useSelector } from "react-redux";
import { selectReceipeDb, setReceipeDb, setCookingReceipe } from "../features/receipeSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";

function Home() {
  const dispatch = useDispatch();
  const receipe = useSelector(selectReceipeDb);
  const readyCook = (receipe) => {
    dispatch(setCookingReceipe(receipe));
  }
  const featuredRef = useRef();
  const [data, setData] = useState([{}]); // state for api query

  return (
    
    <div>
    <Nav />
    <div id="home" className="container home-bg">
      
      <div className="home-container">
        <div className="greeting-container">
          <div className="greeting-text">
            <h1 className="home-title">CureFeed - Your Personalized Recipes</h1>
            <h3>Explore new recipes with your ingredients</h3>
          </div>
          <div className="cta-container">
            <NavLink to="/menu" className="start-btn">
              Start Cooking
            </NavLink>
            <NavLink to="/explore" className="explore-btn">
              See More
            </NavLink>
          </div>
        </div>
        <div className="image-slider-container">
        <div className="dish-image-container">
                      <img src="src/assets/review-background.jpg" alt="" className="dish-image" />
                      {/* <p className="dish-name">{dish.name}</p> */}
                    </div>
        </div>
        <div id="featured" className="featured-dishes-container"></div>
      </div>
    </div>
    </div>
  );
}

export default Home;
