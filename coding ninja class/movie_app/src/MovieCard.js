
import React, { Component } from 'react'
import './index.css'

class MovieCard extends Component {

  render() {
    const {movies, addStars, decStars, handleFav, handleCart} = this.props
    const {title, plot, price, ratings,stars,fav, cart,poster} = this.props.movies
    return (
      <div className='main'>
        <div className='movie-card'>
            <div className='left'>
              <img alt='poster' src={poster} />
            </div>
            <div className='right'>
                <div className='title'>{title}</div>
                <div className='plot'>{plot}</div>
                <div className='price'>{price} kodi</div>

                <div className='footer'>
                    <div className='rating'>{ratings}</div>
                    <div className='star-dis'>
                      <img alt='decrease' className='str-btn' src='https://cdn-icons-png.flaticon.com/128/2801/2801932.png' onClick={()=>{decStars(movies)}}/>
                      <img alt='star' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' className='stars'/>
                      <img alt='increase' className='str-btn' src='https://cdn-icons-png.flaticon.com/128/748/748113.png' onClick={()=>{addStars(movies)}}/>
                      <span className='starCount'>{stars}</span>
                    </div>
                    {/* {fav?<button className='unfavourite-btn' onClick={this.handleFav}>Un-Favorite</button>:
                    <button className='favourite-btn' onClick={this.handleFav}>Favorite</button>} */}
                    <button className={fav?'unfavourite-btn':'favourite-btn'} onClick={()=>{handleFav(movies)}}>{fav?"Un-Favorite":"favourite"}</button>
                    <button className={cart?'recart-btn':'cart-btn'} onClick={()=>{handleCart(movies)}}>{cart?"Remove From Cart":"Add To Cart"}</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default MovieCard
