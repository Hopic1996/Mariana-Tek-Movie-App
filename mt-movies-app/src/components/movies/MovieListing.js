import React, { Component } from "react";
import movieListCSS from "../../assets/css/movieListCSS.css";
import { MovieListAPIs } from "./../../Services/Movies/MovieListAPIs";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            selectedGenres: [],
            searchQuery: "",
        };
    }

    componentDidMount() {
        this.getAllMovies();
    }

    getAllMovies = async () => {
        try {
            let movieList = await MovieListAPIs.getMovieListing();

            if (movieList) {
                this.setState({ movieList: movieList });
            }
        } catch (error) {
            console.error("Error fetching movie list:", error);
        }
    };

    filterMovies = () => {
        const { movieList, selectedGenres, searchQuery } = this.state;

        if (!movieList || !movieList.length) {
            return [];
        }

        return movieList
            .flatMap((list) => list.movies)
            .filter((movie) => {
                const matchesGenre =
                    selectedGenres.length === 0 ||
                    selectedGenres.some((genre) => movie.genre.includes(genre));
                const matchesTitle = movie.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
                return matchesGenre && matchesTitle;
            });
    };

    handleGenreSelect = (event) => {
        const selectedOptions = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        this.setState({ selectedGenres: selectedOptions });
    };

    handleSearchQueryChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    render() {
        const filteredMovies = this.filterMovies();

        const allGenres = Array.from(
            new Set(
                this.state.movieList.flatMap((list) =>
                    list.movies.flatMap((movie) => movie.genre)
                )
            )
        );

        return (
            <div className="App">
                <h1>The Movies@Mariana Tek</h1>

                <div className="filter-container">
                    <div className="filter-item">
                        <label htmlFor="genre-filter">Filter by Genre:</label>
                        <select
                            id="genre-filter"
                            onChange={this.handleGenreSelect}
                            value={this.state.selectedGenres}
                        >
                            <option value="">All Genres</option>
                            {allGenres.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-item">
                        <label htmlFor="title-search">Search by Title:</label>
                        <input
                            type="text"
                            id="title-search"
                            onChange={this.handleSearchQueryChange}
                        />
                    </div>
                </div>

                <div id="movie-list">
                    {filteredMovies.map((movie) => (
                        <div key={movie.title} className="movie">
                            <div className="poster">
                                <img src={movie.poster} alt={movie.title} />
                            </div>
                            <div className="details">
                                <h2>{movie.title}</h2>
                                <p className="genre">
                                    Genres: {movie.genre.join(", ")}
                                </p>
                                <p className="rating">
                                    <span className="label">Rating:</span>{" "}
                                    {movie.Ratings[0]?.value}
                                </p>
                                <p className="release">
                                    <span className="label">Year Release:</span>{" "}
                                    {movie.released}
                                </p>
                                <p className="metascore">
                                    <span className="label">
                                        Metacritic Rating:
                                    </span>{" "}
                                    {movie.meta_score}
                                </p>
                                <p className="runtime">
                                    <span className="label">Runtime:</span>{" "}
                                    {movie.runtime}
                                </p>
                                <p className="director">
                                    <span className="label">Director:</span>{" "}
                                    {movie.director}
                                </p>
                                <p className="actors">
                                    <span className="label">Actors:</span>{" "}
                                    {movie.actors}
                                </p>
                                <p className="plot">
                                    <span className="label">Plot:</span>{" "}
                                    {movie.plot}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
