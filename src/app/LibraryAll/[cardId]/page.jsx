import React from "react";
import Image from "next/image";
import AddToPlanBtn from "../../Buttons/AddToPlanBtn";
import SaveForLaterBtn from "@/app/Buttons/SaveForLaterBtn";

const Page = async ({ params }) => {
  const { cardId } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${cardId}`);

  const data = await res.json();

  return (
    <main className="min-h-screen bg-[#0b0b0b] my-8 px-5 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        {/* Dynamic Image */}
        <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-[550px]">
          <Image
            src={data.image}
            alt={data.name}
            width={800}
            height={400}
            priority
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          {/* Muscle Groups */}
          <div className="mb-5 flex flex-wrap gap-2">
            {data.muscleGroups?.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h1 className="text-4xl font-black uppercase leading-tight md:text-5xl">
            {data.name}
          </h1>

          {/* Description */}
          <p className="mt-5 text-sm leading-7 text-[#8b8d91] md:text-base">
            {data.description}
          </p>

          {/* Key Specs */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#151515]">
            <div className="border-b border-white/10 px-5 py-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
                KEY SPECS
              </h2>
            </div>

            <div className="divide-y divide-white/10">
              <div className="flex justify-between px-5 py-4">
                <span className="text-sm text-[#8b8d91]">Equipment</span>
                <span className="text-sm font-bold">{data.equipment}</span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span className="text-sm text-[#8b8d91]">Difficulty</span>
                <span className="text-sm font-bold">{data.difficulty}</span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span className="text-sm text-[#8b8d91]">Sets</span>
                <span className="text-sm font-bold">{data.sets}</span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span className="text-sm text-[#8b8d91]">Reps</span>
                <span className="text-sm font-bold">{data.reps}</span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span className="text-sm text-[#8b8d91]">Duration</span>
                <span className="text-sm font-bold">{data.duration} min</span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span className="text-sm text-[#8b8d91]">Calories</span>
                <span className="text-sm font-bold">
                  {data.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span className="text-sm text-[#8b8d91]">Rating</span>
                <span className="text-sm font-bold text-[#ccff00]">
                  ★ {data.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="mb-5 text-xl font-black uppercase">INSTRUCTIONS</h2>

            <ol className="space-y-4">
              {data.instructions?.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-sm leading-6 text-[#b0b0b0]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                    {index + 1}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToPlanBtn key={data.id} data={data} />
            <SaveForLaterBtn key={data.name} data={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
