import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card';


const MovieList = ({apiPath}) => {

  const {data:movies} = useFetch(apiPath);

  // console.log(movies);


  return (
    <main className='min-h-screen'>
      <section className='max-w-6xl mx-auto py-6'>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {movies.map((movie) => (
           <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default MovieList