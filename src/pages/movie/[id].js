import SearchForm from "@/components/templates/search/SearchForm";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "@/config/Api";
import Image from "next/image";
import MovieDetailData from "@/components/templates/movie/MovieDetailData";
import RelatedMovie from "@/components/templates/movie/RelatedMovie";
import MovieTrailer from "@/components/templates/movie/MovieTrailer";
import styles from "./moviedetail.module.scss";

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const mid = id?.split("-")[0];

  const [moviedata, setMoviedata] = useState(null);
  const [relatedmovie, setRelatedmovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!mid) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [movieRes, relatedRes, videosRes] = await Promise.all([
          Api(`movie/${mid}?api_key=${process.env.API_KEY}&language=en-US`),
          Api(`movie/${mid}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`),
          Api(`movie/${mid}/videos?api_key=${process.env.API_KEY}&language=en-US`)
        ]);

        setMoviedata(movieRes.data);
        setRelatedmovie(relatedRes.data.results);
        setVideos(videosRes.data.results);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [mid]);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (!moviedata) return <p className="text-white text-center mt-10">Movie not found</p>;

  return (
    <>
      <section
        className={`py-5 lg:py-8 xl:py-20 ${styles.moviebanner}`}
        style={{
          backgroundImage: `url('${process.env.API_IMAGE_URL}w1280/${moviedata?.backdrop_path}')`,
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="xl:px-20">
            <div className="lg:flex justify-between">
              <div className="lg:w-4/12">
                <div className="hidden lg:block">
                  <img
                    src={`${process.env.API_IMAGE_URL}w780/${moviedata?.poster_path}`}
                    width={640}
                    height={940}
                    alt={moviedata?.title || moviedata?.name}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
                <div className="lg:hidden mb-4">
                  <img
                    src={`${process.env.API_IMAGE_URL}w780/${moviedata?.backdrop_path}`}
                    width={736}
                    height={360}
                    alt={moviedata?.title || moviedata?.name}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
              <div className="lg:w-7/12">
                <MovieDetailData data={moviedata} className="mb-5 lg:mb-8" />
                <MovieTrailer data={videos} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`pb-5 lg:pb-8 xl:pb-20`}>
        <div className="container mx-auto">
          <div className="mb-3 xl:mb-10 text-center">
            <h3 className="text-white text-2xl lg:text-3xl">Related Movies</h3>
          </div>
          <RelatedMovie data={relatedmovie} />
        </div>
      </section>
    </>
  );
};

export default MovieDetail;
