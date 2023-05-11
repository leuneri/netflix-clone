import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios'
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            
            return request;
        }
        
        fetchData();
    }, []);

    console.log(movie);

    // Add .. when description is too long
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n-1) + "..." : string;
    }

  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        // backdrop_path based on api found in console object shown
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center"
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview, 200)}
            </h1>
        </div>
        {/* Fading part on bottom */}
        <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner