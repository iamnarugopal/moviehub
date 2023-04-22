import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "@/components/templates/movie/MovieCard";
import Api from "@/config/Api";

const TrendingMovie = ({ data }) => {
  const [dataList, setDataList] = useState(data);
  const [isWeekData, setIsWeekData] = useState(false);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  const fetchData = async (type) => {
    const { data } = await Api(
      `trending/movie/${type}?api_key=${process.env.API_KEY}`
    );
    setDataList(data?.results);
    setIsWeekData(!isWeekData);
  };

  return (
    <section className="py-5 xl:py-10">
      <div className="container mx-auto">
        <div className="flex justify-between mb-3 xl:mb-5">
          <div>
            <h3 className="text-white text-2xl lg:text-4xl">Trending Movies</h3>
          </div>
          <div>
            <div className="flex gap-2">
              <button
                className={`btn btn-sm btn-${!isWeekData ? "light" : "warning"}`}
                disabled={!isWeekData ? true : false}
                type="button"
                onClick={() => fetchData("day")}
              >
                Day
              </button>
              <button
                className={`btn btn-sm btn-${isWeekData ? "light" : "warning"}`}
                disabled={isWeekData ? true : false}
                type="button"
                onClick={() => fetchData("week")}
              >
                Week
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <Slider {...settings}>
                {dataList?.map((item, index) => {
                  return (
                    <div className="p-2 xl:p-4" key={index}>
                      <MovieCard data={item} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingMovie;
