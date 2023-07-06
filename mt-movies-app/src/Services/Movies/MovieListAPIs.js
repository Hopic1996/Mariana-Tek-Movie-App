import { AsyncHttp } from './../AsyncHttp';

export const MovieListAPIs = {
    sMovieServiceURL : process.env.MOVIE_SERVICE_URL,
    getMovieListing
};

// Get patients ABHA card
function getMovieListing() {

    let sMovieServiceURL = this.sMovieServiceURL;
    return AsyncHttp.get('/movies', {}, {}, sMovieServiceURL);
}