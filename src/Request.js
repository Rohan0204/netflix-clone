//usually store the key in environment variable process.env

const API_KEY = "b2a5cc7c10de9c56ff1f1ab09c2f1e23";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_keys=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_keys=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie>api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie>api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovies: `/discover/movie>api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie>api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `/discover/movie>api_key=${API_KEY}&with_genres=99`
}

export default requests;