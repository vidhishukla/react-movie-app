import React from 'react';
import {IMAGE_URL} from '../globals/variables';
import Favorite from '../components/Favorites';


const MovieGrid = ({movie}) => {
    
        const movieDivs = (arr) => {
            return arr.map((movie,i) => {
                return(
                <div className={`movie-0${i + 1}`} key={i}>
                <div className='movies'>
                <figure></figure>
                </div> 
                <div className="movies-list">
                  
                 <img className="poster" src={IMAGE_URL + movie.poster_path} />
                  
                <div className="title">{movie.title}   </div>
                <Favorite/>
                <div className='rating'>{movie.vote_average}</div>
                <div className='release-date'>{movie.release_date}</div>
                <div className='summary'>{movie.overview}</div>
              
                </div>
                </div>
                );
            });
        }

        return (
            <div className="twelve-movie-grid">
                {movieDivs(movie)}
            </div>
        );
    
};
export default MovieGrid;
