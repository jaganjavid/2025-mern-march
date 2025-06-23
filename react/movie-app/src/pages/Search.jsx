import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

const Search = ({apiPath}) => {


  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const {data:movies} = useFetch(apiPath, queryTerm);


  console.log(movies);
  


  return (
    <section className='min-h-screen'>
      <div className="max-w-6xl mx-auto px-5">
        {movies?.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
             {movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
             ))}
          </div>
        ) : null }
      </div>
    </section>
  )
}

export default Search