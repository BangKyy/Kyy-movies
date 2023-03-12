import React, { useState, useEffect, useRef } from 'react';

import tmdbApi, { category, movieType } from '../../api/tmdbApi.js';
import apiConfig from '../../api/apiConfig.js';

const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 4));
                console.log(response)
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            HeroSlide
        </div>
    );
}

export default HeroSlide;