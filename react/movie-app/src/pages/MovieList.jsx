import React from 'react'
import useFetch from '../hooks/useFetch'


const MovieList = ({apiPath}) => {

  useFetch(apiPath);


  return (
    <section className='min-h-screen'>MovieList</section>
  )
}

export default MovieList