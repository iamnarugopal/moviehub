import Image from "next/image";
import Banner from "@/components/templates/home/banner";
import TrendingMovie from "@/components/templates/home/trending/TrendingMovie";
import Api from "@/config/Api";
import TrendingShow from "@/components/templates/home/trending/TrendingShow";

export default function Home({ trendingmovie, trendingshow }) {
  return (
    <>
      <Banner />
      <TrendingMovie data={trendingmovie} />
      <TrendingShow data={trendingshow} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { data: trendingmovie } = await Api(
//     `trending/movie/day?api_key=${process.env.API_KEY}&include_adult=false`
//   );
//   const { data: trendingshow } = await Api(
//     `trending/tv/day?api_key=${process.env.API_KEY}&include_adult=false`
//   );
//   return {
//     props: {
//       trendingmovie: trendingmovie.results,
//       trendingshow: trendingshow.results,
//     },
//   };
// }

// Switch from getServerSideProps → getStaticProps with ISR
export async function getStaticProps() {
  try {
    const { data: trendingmovie } = await Api(
      `trending/movie/day?api_key=${process.env.API_KEY}&include_adult=false`
    );
    const { data: trendingshow } = await Api(
      `trending/tv/day?api_key=${process.env.API_KEY}&include_adult=false`
    );

    return {
      props: {
        trendingmovie: trendingmovie.results,
        trendingshow: trendingshow.results,
      },
      // Revalidate every 1 hour (3600 seconds)
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching trending data:", error);
    return {
      props: {
        trendingmovie: [],
        trendingshow: [],
      },
      revalidate: 3600,
    };
  }
}
