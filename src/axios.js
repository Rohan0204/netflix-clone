// import axios from 'axios';

// // const instance = axios.create({
// //     baseURL: 'https://api.themoviesdb.org/3'
// // });

// // export default instance;

const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/tv?with_networks=213',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTQzZDNlYmMyMDg2N2FhNzYxNTAwNzQzZTVkZjJiZiIsInN1YiI6IjY0YmQzYzU2MGVkMmFiMDBmZjg2ZmM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZyEeCAy0bsjqV1pkadGu2k2-EAN-XgUSch8CcwJKic'
    }
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });


