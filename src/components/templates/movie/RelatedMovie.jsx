import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getmovieurl } from "@/utils/common";

const RelatedMovie = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
                  <div className="relative rounded-lg overflow-hidden">
                    <Link href={getmovieurl(item)}>
                      <div className="relative" style={{ height: 180 }}>
                        <Image
                          src={`${process.env.API_IMAGE_URL}original/${item?.backdrop_path}`}
                          fill
                          alt={item?.original_title}
                          className="rounded-lg shadow-2xl object-cover"
                        />
                      </div>
                      <div className="w-full p-3 pt-7 absolute bottom-0 left-0 bg-gradient-to-t from-black">
                        <p className="text-white">{item?.original_title}</p>
                      </div>
                    </Link>
                  </div>
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
