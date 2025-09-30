import MovieCard from "@/components/templates/movie/MovieCard";
import SearchForm from "@/components/templates/search/SearchForm";
import Api from "@/config/Api";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const [movielist, setMovielist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const movieRes = await Api(
          `search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const tvRes = await Api(
          `search/tv?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        setMovielist([...movieRes.data.results, ...tvRes.data.results]);
      } catch (err) {
        console.error("Error fetching search results:", err);
        setMovielist([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <section className="py-5 bg-zinc-900">
        <div className="container mx-auto">
          <SearchForm />
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto">
          {loading ? (
            <p className="text-white text-center">Loading...</p>
          ) : movielist?.length ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-10">
              {movielist.map((item, index) => (
                <div key={index}>
                  <MovieCard data={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-7 w-1/5">
                <Image
                  src="/images/querynotfound.png"
                  width={352}
                  height={528}
                  alt="notfound"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="text-white">
                <h5 className="mb-4 text-5xl">
                  Search &#34;{query}&#34;
                </h5>
                <p className="text-xl">
                  There are no movies that matched your query.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
