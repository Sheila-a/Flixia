import React from "react";
import "../styles/movieList.css";
import one from "../assets/img/1.jpeg";
import two from "../assets/img/2.jpeg";
import three from "../assets/img/13.jpg";
import four from "../assets/img/14.jpg";
import five from "../assets/img/15.jpg";
import six from "../assets/img/16.jpg";
import seven from "../assets/img/17.jpg";

const MovieList = () => {
  return (
    <div className="movieList-container">
      <h1 className="movieList-title">NEW RELEASES</h1>
      <div className="movieList-wrap">
        <div className="movieList">
          <div className="movieList-item">
            <img src={one} alt="" className="movieList-item_img" />
            <span className="movieList-item_title">Her</span>
            <p className="movieList-item_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              in? Lorem ipsum dolor sit amet.
            </p>
            <button className="movieList-item_btn">Watch</button>
          </div>
          <div className="movieList-item">
            <img src={two} alt="" className="movieList-item_img" />
            <span className="movieList-item_title">Her</span>
            <p className="movieList-item_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              in? Lorem ipsum dolor sit amet.
            </p>
            <button className="movieList-item_btn">Watch</button>
          </div>
          <div className="movieList-item">
            <img src={three} alt="" className="movieList-item_img" />
            <span className="movieList-item_title">Her</span>
            <p className="movieList-item_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              in? Lorem ipsum dolor sit amet.
            </p>
            <button className="movieList-item_btn">Watch</button>
          </div>
          <div className="movieList-item">
            <img src={four} alt="" className="movieList-item_img" />
            <span className="movieList-item_title">Her</span>
            <p className="movieList-item_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              in? Lorem ipsum dolor sit amet.
            </p>
            <button className="movieList-item_btn">Watch</button>
          </div>
          <div className="movieList-item">
            <img src={five} alt="" className="movieList-item_img" />
            <span className="movieList-item_title">Her</span>
            <p className="movieList-item_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              in? Lorem ipsum dolor sit amet.
            </p>
            <button className="movieList-item_btn">Watch</button>
          </div>
          <div className="movieList-item">
            <img src={six} alt="" className="movieList-item_img" />
            <span className="movieList-item_title">Her</span>
            <p className="movieList-item_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              in? Lorem ipsum dolor sit amet.
            </p>
            <button className="movieList-item_btn">Watch</button>
          </div>
          <div className="movieList-item">
            <img src={seven} alt="" className="movieList-item_img" />
            <span className="movieList-item_title">Her</span>
            <p className="movieList-item_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              in? Lorem ipsum dolor sit amet.
            </p>
            <button className="movieList-item_btn">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
