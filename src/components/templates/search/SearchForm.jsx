import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    if (!!router.query?.query) {
      reset({
        search: router.query?.query,
      });
    }
  }, [router.query]);

  const onSubmit = (data) => {
    if (!!data?.search) {
      router.push({
        pathname: "/search",
        query: {
          query: data?.search,
        },
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="flex gap-3">
            <div className="grow">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search movies & show.."
                {...register("search", {
                  required: "Search is required",
                })}
              />
              {errors.search && (
                <div className="form-error">{errors.search.message}</div>
              )}
            </div>
            <div className="shrink-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-warning btn-lg"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
