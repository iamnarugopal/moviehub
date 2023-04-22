import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "@/components/templates/movie/MovieCard";
import Api from "@/config/Api";
import MovieTrailerCard from "./MovieTrailerCard";

const MovieTrailer = ({ data }) => {
  // console.log(data);
  // const [dataList, setDataList] = useState(data);
  // const [isWeekData, setIsWeekData] = useState(false);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  // const fetchData = async (type) => {
  //   const { data } = await Api(
  //     `trending/movie/${type}?api_key=${process.env.API_KEY}`
  //   );
  //   setDataList(data?.results);
  //   setIsWeekData(!isWeekData);
  // };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 5).map((item, index) => {
          return (
            <div className="px-2" key={index}>
              <MovieTrailerCard data={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MovieTrailer;
