import SearchForm from "@/components/templates/search/SearchForm";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Api from "@/config/Api";
import Image from "next/image";
import MovieDetailData from "@/components/templates/movie/MovieDetailData";
import RelatedMovie from "@/components/templates/movie/RelatedMovie";
import styles from "./moviedetail.module.scss";
import MovieTrailer from "@/components/templates/movie/MovieTrailer";

export async function getServerSideProps(context) {
  const mid = context.query.id.split("-")[0];
  const { data: data } = await Api(
    `tv/${mid}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const { data: related } = await Api(
    `tv/${mid}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const { data: tvvideos } = await Api(
    `tv/${mid}/videos?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: {
      data: data,
      related: related,
      videos: tvvideos,
    }, // will be passed to the page component as props
  };
}

const TvShowDetail = ({ data, related, videos }) => {
  // useEffect(() => {
  //   console.log(videos);
  // }, [videos]);

  // useEffect(() => {
  //   console.log(relatedmovie?.results[0]);
  // }, [relatedmovie]);

  return (
    <>
      <section
        className={`py-5 lg:py-8 xl:py-20 ${styles.moviebanner}`}
        style={{
          backgroundImage: `url('${process.env.API_IMAGE_URL}w1280/${data?.backdrop_path}')`,
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="xl:px-20">
            <div className="lg:flex justify-between">
              <div className="lg:w-4/12">
                <div className="hidden lg:block">
                  <img
                    src={`${process.env.API_IMAGE_URL}w780/${data?.poster_path}`}
                    width={640}
                    height={940}
                    alt={!!data?.title ? data?.title : data?.name}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
                <div className="lg:hidden mb-4">
                  <img
                    src={`${process.env.API_IMAGE_URL}w780/${data?.backdrop_path}`}
                    width={736}
                    height={360}
                    alt={!!data?.title ? data?.title : data?.name}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
              <div className="lg:w-7/12">
                <div>
                  <MovieDetailData
                    data={data}
                    videos={videos?.results}
                    className="mb-5 lg:mb-8"
                  />
                   <MovieTrailer data={videos?.results} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`pb-5 lg:pb-8 xl:pb-20`}>
        <div className="container mx-auto">
          <div className="mb-3 xl:mb-10 text-center">
            <h3 className="text-white text-2xl lg:text-3xl">Related Tv Shows</h3>
          </div>
          <RelatedMovie data={related?.results} />
        </div>
      </section>
    </>
  );
};

export default TvShowDetail;
