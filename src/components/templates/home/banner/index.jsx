import React from "react";
import styles from "./banner.module.scss";

import SearchForm from "../../search/SearchForm";

const Banner = () => {

  return (
    <section className={`py-5 flex items-center ${styles.banner}`}>
      <div className="container z-10 mx-auto">
        <div className="">
          <div className="text-center">
            <h2 className="text-white text-3xl font-extrabold mb-5 leading-tight sm:text-5xl  md:text-6xl lg:text-7xl xl:text-8xl">
              Millions of Movies & TV shows to discover.
            </h2>
            <h5 className="text-white text-2xl font-medium mb-10 sm:text-3xl lg:text-5xl">
              Search anywhere anytime.
            </h5>
            <div className="lg:w-4/5 xl:w-2/5 mx-auto">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
