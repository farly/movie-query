import React, {useState} from 'react';
import {
  Redirect
} from 'react-router-dom';

import { HomeScreen } from './../screens/HomeScreen';

import * as movieService from './../../api/service/movies';

const {
  REACT_APP_IMDB_API_URL,
  REACT_APP_IMDB_APIKEY,
  REACT_APP_DEFAULT_SEARCH_TERM
} = process.env;

export const HomeContainer = (props) => {

  const [formState, setFormState] = useState({
    url: REACT_APP_IMDB_API_URL || '',
    apikey: REACT_APP_IMDB_APIKEY || '',
    headers: REACT_APP_DEFAULT_SEARCH_TERM || '',
    body: '',
    httpMethod: ''
  })

  const [searchResult, setSearchResult] = useState({
    hasResult: false,
    results: []
  });

  const [error, setError] = useState({
    error: false,
    errorMessage: ''  
  });

  const onSearch = async (e) => {
    e.preventDefault();
    const {url, apikey, headers} = formState; 

    const queryString = [`apikey=${apikey}`,[`s=${headers}`]].join('&');

    try {
      const { Search, Response, totalResults, Error} = await movieService.search({url, queryString});

      if (Response === 'True') {
        // hasResult signifies search as clicked, regardless if totalResults == 0
        setSearchResult({
          hasResult: true,
          results: Search
        })
      } else {
        setError({
          error: true,
          errorMessage: Error 
        })
      }
    } catch(err) {
      setError({
        error: true,
        errorMessage: err.message
      })  
      // throw error here
      // or redirect to error page
    }
  }

  const { hasResult, results } = searchResult;

  if (hasResult) {
    return (
      <Redirect 
        to={{
          pathname: '/result',
          state: {
            data: results,
            formState: formState
          }
        }} 
      />
    )
  }

  return (
    <HomeScreen
      updateFormState={setFormState}
      formState={formState}
      onSearch={onSearch}
      onError={error}
      closeError={() => setError({error: false, errorMessage: ''})}
    />
  );
}
