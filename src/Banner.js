import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios';
// import requests from './Request'

const Banner = () => {

    async function fetchData() {

        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/discover/tv?with_networks=213',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTQzZDNlYmMyMDg2N2FhNzYxNTAwNzQzZTVkZjJiZiIsInN1YiI6IjY0YmQzYzU2MGVkMmFiMDBmZjg2ZmM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZyEeCAy0bsjqV1pkadGu2k2-EAN-XgUSch8CcwJKic'
            }
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(Math.floor(Math.random() * response.data.results.length - 1));
                console.log(response.data.results[1]);
                setMovie(response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        fetchData();

    }, []);


    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie ? movie.backdrop_path : ""}")`
        }}>
            <div className='banner__content'>
                <h1 className='banner__title'>{movie ? movie.name : ""}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h2 className='banner__description'>
                    {truncate(`${movie ? movie.overview : ""}`, 150)}
                </h2>
            </div>

            <div className='banner--fadebottom'></div>

        </header>
    )
}

export default Banner