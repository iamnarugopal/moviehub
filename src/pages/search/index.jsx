import MovieCard from "@/components/templates/movie/MovieCard";
import SearchForm from "@/components/templates/search/SearchForm";
import Api from "@/config/Api";
import React from "react";

export async function getServerSideProps(context) {
  const query = context.query.query;
  const { data: movielist } = await Api(
    `search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
  );
  return {
    props: {
      movielist: movielist.results,
    }, // will be passed to the page component as props
  };
}

const Search = ({ movielist }) => {
  return (
    <>
      <section className="py-5 bg-zinc-900">
        <div className="container mx-auto">
          <SearchForm />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-10">
            {movielist?.map((item, index) => { 
              return (
                <div className="" key={index}>
                  <MovieCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
