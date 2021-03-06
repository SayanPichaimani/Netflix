const API_KEY = "1a10eaf6aa7c8e1774c938a239000b1d"

const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=fr-FR&networks=Netflix&release_date.gte=2017-05-01`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;