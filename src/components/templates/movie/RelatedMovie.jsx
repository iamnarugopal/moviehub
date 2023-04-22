import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedMovieCard from "./RelatedMovieCard";

const RelatedMovie = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows:false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          arrows:false,
        },
      },
    ],
  };
  return (
    <div>
      <h5 className="text-white text-xl mb-4">Related Movie</h5>
      <div>
        <div>
          <Slider {...settings}>
            {data?.map((item, index) => {
              return (
                <div className="px-2" key={index}>
                  <RelatedMovieCard data={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RelatedMovie;
