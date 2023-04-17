import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/templates/home/banner";
import TrendingMovie from "@/components/templates/home/trending/TrendingMovie";
import Api from "@/config/Api";
import TrendingShow from "@/components/templates/home/trending/TrendingShow";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ trendingmovie, trendingshow }) {
  return (
    <>
      <Banner />
      <TrendingMovie data={trendingmovie} />
      <TrendingShow data={trendingshow} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { data: trendingmovie } = await Api(
    `trending/movie/day?api_key=${process.env.API_KEY}`
  );
  const { data: trendingshow } = await Api(
    `trending/tv/day?api_key=${process.env.API_KEY}`
  );
  return {
    props: {
      trendingmovie: trendingmovie.results,
      trendingshow: trendingshow.results,
    },
  };
}
