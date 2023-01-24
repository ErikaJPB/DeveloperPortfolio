import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Hero({ heading, message }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img ">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]  mt[6rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-3xl">{message}</p>

        {router.pathname !== "/contact" &&
        router.pathname !== "/about" &&
        router.pathname !== "/portfolio" ? (
          <Link href="/contact">
            <button className="px-8 py-4 border my-5">Contact Me</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Hero;
