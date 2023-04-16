import SearchForm from "@/components/templates/search/SearchForm";
import React from "react";

const Movie = () => {
  return (
    <>
      <section className="py-5 bg-zinc-900">
        <div className="container mx-auto">
          <SearchForm />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto">
        </div>
      </section>
    </>
  );
};

export default Movie;
