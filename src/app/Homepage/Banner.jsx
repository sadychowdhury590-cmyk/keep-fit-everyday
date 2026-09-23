
import React from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../assests/banner.png";

const Banner = () => {
  return (
    <section className="px-5 py-8 text-white md:px-8 md:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 rounded-2xl bg-black px-6 py-8 md:px-10 lg:flex-row lg:gap-10 lg:px-12 lg:py-10">

        {/* Left Content */}
        <div className="w-full lg:w-[52%]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00] md:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-[#8b8d91] md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-black transition duration-300 hover:bg-white sm:px-6 sm:py-3.5 sm:text-sm"
          >
            BROWSE WORKOUTS
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[48%]">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={banner}
              alt="Workout Illustration"
              width={800}
              height={500}
              priority
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

