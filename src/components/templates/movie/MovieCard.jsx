import { getmovieurl } from "@/utils/common";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ data }) => {
 
  return (
    <div className="">
      <Link href={getmovieurl(data)}>
        <div className="mb-4">
          <Image
            src={`${process.env.API_IMAGE_URL}w342/${data?.poster_path}`}
            width={352}
            height={528}
            alt="s"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
        <div className="text-white">
          <h5 className="text-xl font-bold mb-2">{data?.original_title}</h5>
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
