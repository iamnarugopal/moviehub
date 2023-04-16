import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const router = useRouter();
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    setIsHomepage(router.pathname === "/");
  }, [router.isReady, router.pathname]);

  return (
    <header
      className={`${
        isHomepage ? "absolute py-4 md:py-8" : "bg-black py-4"
      } z-10 w-full`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="shrink-0">
            <div className="">
              <Link href="/">
                <Image
                  src="/images/logo-white.png"
                  width={150}
                  height={40}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-5 xl:gap-10 shrink-0 items-center">
            {router?.pathname === "/movie/[id]" && (
              <div className="shrink-0">
                <Link href="/movie" className="text-white text-3xl">
                  <FiSearch />
                </Link>
              </div>
            )}

            <div className="shrink-0">
              <a href="https://www.themoviedb.org/" target="_blank">
                <Image
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                  width={60}
                  height={44}
                  alt="TMDB"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
