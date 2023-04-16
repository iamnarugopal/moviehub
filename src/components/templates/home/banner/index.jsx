import React from "react";
import styles from "./banner.module.scss";

import SearchForm from "../../search/SearchForm";

const Banner = () => {

  return (
    <section className={`py-5 flex items-center ${styles.banner}`}>
      <div className="container z-10 mx-auto">
        <div className="">
          <div className="text-center">
            <h2 className="text-white text-8xl font-extrabold mb-5 leading-tight">
              Millions of Movies & TV shows to discover.
            </h2>
            <h5 className="text-white text-4xl font-bold mb-10">
              Search anywhere anytime.
            </h5>
            <div className="w-2/5 mx-auto">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
