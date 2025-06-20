import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../utils/Options';

const MovieDetails = () => {

  const params = useParams();

  const [data, setData] = useState({});

  // console.log(params);
  const { original_title, overview, poster_path, vote_average, vote_count, genres, release_date } = data;

  useEffect(() => {

    async function fecthMovie() {

      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options);

      const json = await response.json();

      setData(json);

    }

    fecthMovie();

  }, []);

  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  console.log(data);

  return (
   <section className='min-h-screen'>
     <div className='max-w-4xl mx-auto py-20 px-4'>
      <div className='flex flex-col md:flex-row gap-5'>
        <img src={image} className='rounded shadow-lg w-full md:w-1/3' alt="" />

        <div>
          <h1 className='text-3xl font-bold mt-3 mb-3 text-center md:text-left'>
            {original_title}
          </h1>

          <p className='text-gray-500 mb-2 text-center md:text-left'>
            <strong>Release :</strong> {release_date}
          </p>

          <p className='text-yellow-500 mb-2 text-center md:text-left'>
            <strong>Rating :</strong> {vote_average}
          </p>

          <div className='flex flex-wrap gap-2 mb-4 justify-center md:justify-start'>
            {genres?.map((gener) => (
              <span key={gener.id} className='bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded-full'>
                {gener.name}
              </span>
            ))}
          </div>

          <p className='text-center md:text-left'>
            {overview}
          </p>

        </div>
      </div>
    </div>
   </section>
  )
}

export default MovieDetails