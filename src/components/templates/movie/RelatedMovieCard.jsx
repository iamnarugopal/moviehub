import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getmovieurl } from "@/utils/common";

const RelatedMovieCard = ({ data }) => {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden">
        <Link href={getmovieurl(data)}>
          <div className="relative" style={{ height: 180 }}>
            <Image
              src={`${
                !!data?.backdrop_path
                  ? `${process.env.API_IMAGE_URL}w300/${data?.backdrop_path}`
                  : "https://dummyimage.com/246x180/fff/aaa"
              }`}
              fill
              alt={!!data?.title ? data?.title : data?.name}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="w-full p-3 pt-7 absolute bottom-0 left-0 bg-gradient-to-t from-black">
            <p className="text-white">{!!data?.title ? data?.title : data?.name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RelatedMovieCard;
