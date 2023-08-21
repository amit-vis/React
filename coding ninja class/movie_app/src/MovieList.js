import React, { Component } from 'react'
import MovieCard from './MovieCard';


class MovieList extends Component {

  render() {
    // const { title, plot, price, ratings, fav, cart, poster } = this.state.movies
    const { movies, addStars, decStars, handleCart, handleFav } = this.props;
    console.log(this.props)
    return (
      <>
        {movies.map((movie) => <MovieCard movies={movie} 
        addStars={addStars} decStars={decStars} handleCart={handleCart} handleFav={handleFav} key={movie.id}/>)}
      </>
    )
  }
}

export default MovieList;