import React, { useEffect, useState } from 'react';

import { MovieScreen } from './../screens/MovieScreen';

import * as movieService from './../../api/service/movies';

export const MovieContainer = (props) => {

  const { formState, imdbID } = props;

  const [movie, setMovie] = useState(null);

  useEffect(async () => {

    (async () => {
      const { url, apikey } = formState;

      const queryString = [`apikey=${apikey}`, `i=${imdbID}`].join('&');
      try {
        const data = await movieService.search({url, queryString});
        setMovie(data);
      } catch (err) {
      }
    })();
  })

  return <MovieScreen movie={movie}/>
}