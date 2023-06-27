
const useMovies = () => {
    const getMovies = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWY0YjllNWVhMzM5MDM3ZDBkYjBlZDk5Y2NjYjczNyIsInN1YiI6IjY0OWE0NTBiYTZkZGNiMDBjNjllN2IyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-PW3-SJqjFmrWq3Hx_AT69pJcJ6BcV48fTS5Rk53Kc8'
                }
            };

            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);

            const movies = await response.json()
      
            return movies.results

        } catch (error) {
            console.log(error)
        }

    }

 


    return {
        getMovies
    }
}

export default useMovies