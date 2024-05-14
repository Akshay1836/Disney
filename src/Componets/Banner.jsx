import React, { useEffect, useState } from "react";
import { YOUR_API_KEY_HERE } from "../../constants";
import { useRef } from "react";
import "./Banner.css";
import axios from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const movieBaseUrl = "https://api.themoviedb.org/3";
  const api_key = YOUR_API_KEY_HERE;

  const getTrendingVideos = axios.get(
    movieBaseUrl + "/trending/all/day?api_key=" + api_key
  );
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = async() => {
    await getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      var a = Math.floor(Math.random() * 10) + 1;

      setMovie(resp.data.results[a]);
    });
  };
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `URL(${
          movie ? IMAGE_BASE_URL + movie.poster_path : ""
        })`,
      }}
    >
      <div className="content">
        <h1 className="title font-bold">
          {movie ? movie.title || movie.name : ""}
        </h1>
        <div className="banner_buttons my-6 ">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <br />
        <h1 className="description font-thin mt-2">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

//src={IMAGE_BASE_URL + item.backdrop_path}
