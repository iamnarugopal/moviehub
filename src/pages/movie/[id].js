import SearchForm from "@/components/templates/search/SearchForm";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Api from "@/config/Api";
import Image from "next/image";
import MovieDetailData from "@/components/templates/movie/MovieDetailData";
import RelatedMovie from "@/components/templates/movie/RelatedMovie";

export async function getServerSideProps(context) {
  const mid = context.query.id.split("-")[0];
  const { data: moviedata } = await Api(
    `movie/${mid}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const { data: relatedmovie } = await Api(
    `movie/${mid}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  return {
    props: {
      moviedata: moviedata,
      relatedmovie: relatedmovie,
    }, // will be passed to the page component as props
  };
}

const MovieDetail = ({ moviedata, relatedmovie }) => {
  // useEffect(() => {
  //   console.log(moviedata);
  // }, [moviedata]);

  // useEffect(() => {
  //   console.log(relatedmovie?.results[0]);
  // }, [relatedmovie]);


  return (
    <>
      <section className="py-5 lg:py-10">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="w-5/12">
              <div>
                <Image
                  src={`${process.env.API_IMAGE_URL}w780/${moviedata?.poster_path}`}
                  width={640}
                  height={940}
                  alt="s"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="w-6/12">
              <div>
                <MovieDetailData data={moviedata} className="mb-5 lg:mb-8" />
                <RelatedMovie data={relatedmovie?.results} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetail;
