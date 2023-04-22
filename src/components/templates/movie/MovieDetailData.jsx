import React from "react";
import dayjs from "dayjs";
// import { Tab } from "@headlessui/react";
import { FaStar } from "react-icons/fa";

const MovieDetailData = ({ data, className, videos }) => {
  // console.log(videos);
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
              {!!data?.runtime && (
                <span className="me-3">{`${Math.floor(data?.runtime / 60)}h ${
                  data?.runtime % 60
                }min`}</span>
              )}

              {!!data?.number_of_seasons && !!data?.number_of_episodes && (
                <>
                  <span className="me-3">
                    Seasons : {data?.number_of_seasons}
                  </span>
                  <span className="me-3">
                    Episodes : {data?.number_of_episodes}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="shrink-0 ms-3">
            <div className="bg-yellow-400 p-3 py-1 flex items-center font-bold  text-sm rounded-3xl gap-1">
              <FaStar /> {(data?.vote_average).toFixed(1)}
            </div>
          </div>
        </div>

        <div>
          {/* <Tab.Group>
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
              <Tab.Panel> */}
          <div className="">
            <p className="text-white text-sm leading-7 mb-4">
              {data?.overview}
            </p>
            <div>
              <table className="text-white text-sm font-medium w-full">
                <tbody>
                  {!!data?.genres?.length && (
                    <tr>
                      <td className="text-slate-500 w-1/5 py-2 pr-3">Genre</td>
                      <td>{data?.genres?.map((a) => a.name).join(", ")}</td>
                    </tr>
                  )}
                  {!!data?.created_by?.length && (
                    <tr>
                      <td className="text-slate-500 w-1/5 py-2 pr-3">Created By</td>
                      <td>{data?.created_by?.map((a) => a.name).join(", ")}</td>
                    </tr>
                  )}
                  {!!data?.languages?.length && (
                    <tr>
                      <td className="text-slate-500 w-1/5 py-2 pr-3">Languages</td>
                      <td>{data?.languages?.join(", ")}</td>
                    </tr>
                  )}
                  {!!data?.production_companies?.length && (
                    <tr>
                      <td className="text-slate-500 w-1/5 py-2 pr-3">
                        Production Companies
                      </td>
                      <td>
                        {data?.production_companies
                          ?.map((a) => a.name)
                          ?.join(", ")}
                      </td>
                    </tr>
                  )}
                  {!!data?.production_countries?.length && (
                    <tr>
                      <td className="text-slate-500 w-1/5 py-2 pr-3">
                        Production Ccountries
                      </td>
                      <td>
                        {data?.production_countries
                          ?.map((a) => a.name)
                          ?.join(", ")}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* </Tab.Panel>
              <Tab.Panel>
                
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group> */}
        </div>
      </div>
    </>
  );
};

export default MovieDetailData;
