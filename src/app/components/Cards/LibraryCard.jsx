
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LibraryCard = ({ data }) => {
  return (
    <Link href={`/LibraryAll/${data?.id}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50">

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={data?.image}
            alt={data?.name || "Workout"}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Category */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black">
              {data?.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">

          <h3 className="text-xl font-black uppercase tracking-tight text-white">
            {data?.name}
          </h3>

          <p className="mt-2 text-sm text-[#8b8d91]">
            {data?.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">

            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#777]">
                Duration
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                ⏱ {data?.duration} min
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#777]">
                Calories
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                🔥 {data?.calories} kcal
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#777]">
                Rating
              </p>
              <p className="mt-1 text-sm font-bold text-[#ccff00]">
                ★ {data?.rating}
              </p>
            </div>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;

