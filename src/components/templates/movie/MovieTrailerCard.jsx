import React from "react";

const MovieTrailerCard = ({ data }) => {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${data?.key}`}
          title={data?.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          width={400}
          height={200}
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailerCard;
