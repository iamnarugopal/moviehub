import React from "react";
import dayjs from "dayjs";
import { Tab } from "@headlessui/react";

const MovieDetailData = ({ data, className, videos }) => {
  console.log(videos);
  return (
    <>
      <div className={className}>
        <div className="flex mb-5 lg:mb-8">
          <div className="grow">
            <h1 className="text-white text-3xl font-bold  mb-5 md:text-5xl">
              {!!data?.title ? data?.title : data?.name}
            </h1>
            <div className="text-slate-400 font-semibold ">
              <span className="me-3">
                {dayjs(data?.release_date, "YYYY-MM-DD").format("YYYY")}
              </span>
              <span className="me-3">Seasons : {data?.number_of_seasons}</span>
              <span className="me-3">
                Episodes : {data?.number_of_episodes}
              </span>
            </div>
          </div>
          <div className="shrink-0"></div>
        </div>

        <div>
          <Tab.Group>
            <Tab.List className="mb-5 border-b border-slate-700 border-solid gap-5 lg:gap-10 flex overflow-auto whitespace-nowrap">
              <Tab className="inline-block text-md md:text-xl uppercase border-b-2 pb-3 tracking-wider  font-medium ui-not-selected:border-transparent ui-not-selected:text-slate-500  ui-selected:text-white ui-selected:border-b-yellow-500 ui-selected:font-semibold">
                Overview
              </Tab>
              <Tab className="inline-block text-md md:text-xl uppercase border-b-2 pb-3 tracking-wider  font-medium ui-not-selected:border-transparent ui-not-selected:text-slate-500  ui-selected:text-white ui-selected:border-b-yellow-500 ui-selected:font-semibold">
                Trailers & more
              </Tab>
              <Tab className="inline-block text-md md:text-xl uppercase border-b-2 pb-3 tracking-wider  font-medium ui-not-selected:border-transparent ui-not-selected:text-slate-500  ui-selected:text-white ui-selected:border-b-yellow-500 ui-selected:font-semibold">
                More like this
              </Tab>
              <Tab className="inline-block text-md md:text-xl uppercase border-b-2 pb-3 tracking-wider  font-medium ui-not-selected:border-transparent ui-not-selected:text-slate-500  ui-selected:text-white ui-selected:border-b-yellow-500 ui-selected:font-semibold">
                Details
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="">
                  <p className="text-white text-sm leading-7 mb-4">
                    {data?.overview}
                  </p>
                  <div>
                    <table className="text-white text-sm font-medium w-full">
                      <tbody>
                        <tr>
                          <td className="text-slate-500 w-1/5 py-2">Genre</td>
                          <td>{data?.genres?.map((a) => a.name).join(", ")}</td>
                        </tr>
                        <tr>
                          <td className="text-slate-500 w-1/5 py-2">
                            Created By
                          </td>
                          <td>
                            {data?.created_by?.map((a) => a.name).join(", ")}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-slate-500 w-1/5 py-2">
                            Languages
                          </td>
                          <td>{data?.languages?.join(", ")}</td>
                        </tr>
                        <tr>
                          <td className="text-slate-500 w-1/5 py-2">
                            Production Companies
                          </td>
                          <td>
                            {data?.production_companies
                              ?.map((a) => a.name)
                              ?.join(", ")}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-slate-500 w-1/5 py-2">
                            Production Ccountries
                          </td>
                          <td>
                            {data?.production_countries
                              ?.map((a) => a.name)
                              ?.join(", ")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="text-white">Content 2</div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default MovieDetailData;
