import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./MovieData";

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }

  handleIncStar = (movie) => {
    const { movies } = this.state

    const mid = movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5
    this.setState({
      movies
    })
  }

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie)
    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5
    this.setState({
      movies
    })
  }

  handleFavBut = (movie) => {
    const { movies } = this.state;
    const midIndex = movies.indexOf(movie);
    movies[midIndex].fav = !movies[midIndex].fav
    this.setState({
      movies
    })
  }

  handleCartButt = (movie) => {
    let { movies, cartCount } = this.state;
    const movieIndex = movies.indexOf(movie);
    movies[movieIndex].cart = !movies[movieIndex].cart;
    if(movies[movieIndex].cart){
      cartCount += 1
    }else{
      cartCount -=1
    }
    this.setState({
      movies,
      cartCount
    })
  }
  render() {
    const { movies,cartCount } = this.state;
    return (
      <div>
        <Navbar cartCount={cartCount}/>
        <MovieList movies={movies}
          addStars={this.handleIncStar}
          decStars={this.handleDecStar}
          handleFav={this.handleFavBut}
          handleCart={this.handleCartButt} />
      </div>
    )
  }
}


// import Students from "./Students";
// import React from 'react'

// function App() {
//   return (
//     <>
//     <Students name="Alexa" marks={80}/>
//     <Students name="Siri" marks={79}/>
//     <Students name="Google" marks={90}/>
//     <Students />
//     </>
//   )
// }

// Students.defaultProps={
//   name: "Student",
//   marks: "NA"
// }

// export default App

