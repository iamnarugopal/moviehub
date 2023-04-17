import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "@/components/templates/movie/MovieCard";

const TrendingShow = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
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
          arrows:false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows:false,
        },
      },
    ],
  };

  return (
    <section className="py-5 xl:py-10">
      <div className="container mx-auto">
        <div className="mb-3 xl:mb-5">
          <div className="">
            <h3 className="text-white text-2xl lg:text-4xl">Trending Shows</h3>
          </div>
        </div>
        <div>
          <div>
            <div>
              <Slider {...settings}>
                {data?.map((item, index) => {
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

export default TrendingShow;