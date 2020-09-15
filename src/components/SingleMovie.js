import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMovie = () => {

    let {id} = useParams();
    console.log(id);
    return(
        <main>
            <section className='single-movie-section'>
                    <h2>Movie Name</h2>
                    <div className="movie">
					<div className='movie-poster'>
					<figure><img src="" alt="" /></figure>
					</div>			
					<div className='movie-context'>
					<div className='release-date'></div>
					<div className='rating'></div>
					<div className='summary'><p></p></div>
                        
                    
					</div>
                    </div>	
            </section>
        </main>

    );
}


export default SingleMovie;