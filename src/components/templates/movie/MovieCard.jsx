import { getmovieurl } from "@/utils/common";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ data }) => {
  return (
    <div className="h-full rounded-xl overflow-hidden hover:scale-105 transition-transform">
      <Link
        href={getmovieurl(data)}
        className="h-full block bg-gray-950  hover:bg-gray-800 transition-colors"
      >
        <div className="relative">
          <img
            src={`${
              !!data?.poster_path
                ? `${process.env.API_IMAGE_URL}w342/${data?.poster_path}`
                : "https://dummyimage.com/270x405/fff/aaa"
            }`}
            width={352}
            height={528}
            alt={!!data?.title ? data?.title : data?.name}
            className="w-full rounded-lg shadow-2xl"
          />
          <div className="absolute top-4 right-4 z-10 bg-yellow-400 p-3 py-1 flex items-center font-bold  text-sm rounded-3xl gap-1">
            <FaStar /> {(data?.vote_average).toFixed(1)}
          </div>
        </div>
        <div className="p-3 lg:p-5 text-white">
          <h5 className="text-lg md:text-xl font-bold mb-2">
            {!!data?.title ? data?.title : data?.name}
          </h5>
          <p className="mb-4">
            {dayjs(data?.release_date, "YYYY-MM-DD").format("YYYY")}
          </p>
          <p className="text-sm line-clamp-2 text-slate-400">
            {data?.overview}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
