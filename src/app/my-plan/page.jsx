"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { userContext } from "../context/UserContext";

const MyPlan = () => {
  const { todayPlan, setTodayPlan, save } = useContext(userContext);

  const exercises = todayPlan.length;

  const minutes = todayPlan.reduce(
    (total, item) => total + item.duration,
    0
  );

  const calories = todayPlan.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  const handleRemove = (id) => {
    const remaining = todayPlan.filter((item) => item.id !== id);
    setTodayPlan(remaining);
  };

  return (
    <main className="my-8 min-h-screen bg-[#0b0b0b] px-5 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 text-sm text-[#8b8d91] md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b8d91]">
              Exercises
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#ccff00]">
              {exercises}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b8d91]">
              Minutes
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#ccff00]">
              {minutes}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b8d91]">
              Calories
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#ccff00]">
              {calories}
            </h2>
          </div>

        </div>

        <div className="mt-10">
          <div className="tabs tabs-lift w-full">

            <input
              type="radio"
              name="my_plan_tabs"
              className="tab text-white [--tab-color:#ccff00] checked:text-white"
              aria-label="Today's Plan"
              defaultChecked
            />

            <div className="tab-content min-h-[300px] w-full border-base-300 bg-[#151515] p-6 text-white">

              {todayPlan.length === 0 ? (
                <div className="flex min-h-[250px] flex-col items-center justify-center text-center">

                  <h2 className="text-2xl font-black uppercase text-white">
                    NOTHING HERE YET
                  </h2>

                  <p className="mt-3 max-w-md text-sm text-[#8b8d91]">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link
                    href="/"
                    className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-white"
                  >
                    Go to workouts
                  </Link>

                </div>
              ) : (
                <div>

                  <h2 className="mb-6 text-xl font-bold uppercase text-white">
                    Today's Plan
                  </h2>

                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {todayPlan.map((item) => (
                      <div
                        key={item.id}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]"
                      >

                        <div className="relative h-52 w-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="p-5">

                          <h3 className="text-lg font-black uppercase">
                            {item.name}
                          </h3>

                          <p className="mt-2 text-sm text-[#8b8d91]">
                            {item.equipment}
                          </p>

                          <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">

                            <div>
                              <p className="text-[10px] uppercase text-[#777]">
                                Duration
                              </p>
                              <p className="mt-1 text-sm font-bold">
                                ⏱ {item.duration}m
                              </p>
                            </div>

                            <div>
                              <p className="text-[10px] uppercase text-[#777]">
                                Calories
                              </p>
                              <p className="mt-1 text-sm font-bold">
                                🔥 {item.caloriesBurned}
                              </p>
                            </div>

                            <div>
                              <p className="text-[10px] uppercase text-[#777]">
                                Rating
                              </p>
                              <p className="mt-1 text-sm font-bold text-[#ccff00]">
                                ★ {item.rating}
                              </p>
                            </div>

                          </div>

                          <div className="mt-5 flex flex-wrap gap-2">

                            <Link
                              href={`/workouts/${item.id}`}
                              className="flex-1 rounded-full border border-white/20 px-3 py-2 text-center text-xs font-bold uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
                            >
                              View Details
                            </Link>

                            <button
                              onClick={() => handleRemove(item.id)}
                              className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase transition hover:border-red-500 hover:text-red-500"
                            >
                              ✕
                            </button>

                          </div>

                          <button
                            onClick={() => handleRemove(item.id)}
                            className="mt-2 w-full rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black transition hover:bg-white"
                          >
                            Mark as Done
                          </button>

                        </div>
                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>

            <input
              type="radio"
              name="my_plan_tabs"
              className="tab text-white [--tab-color:#ccff00] checked:text-white"
              aria-label="Saved"
            />

            <div className="tab-content min-h-[300px] w-full border-base-300 bg-[#151515] p-6 text-white">

              {save.length === 0 ? (
                <div className="flex min-h-[250px] flex-col items-center justify-center text-center">

                  <h2 className="text-2xl font-black uppercase">
                    NOTHING HERE YET
                  </h2>

                  <p className="mt-3 max-w-md text-sm text-[#8b8d91]">
                    Save workouts from the library and they will appear here.
                  </p>

                  <Link
                    href="/"
                    className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-white"
                  >
                    Go to workouts
                  </Link>

                </div>
              ) : (
                <div>

                  <h2 className="mb-6 text-xl font-bold uppercase">
                    Saved
                  </h2>

                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {save.map((item) => (
                      <div
                        key={item.id}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]"
                      >

                        <div className="relative h-52 w-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="p-5">

                          <h3 className="text-lg font-black uppercase">
                            {item.name}
                          </h3>

                          <p className="mt-2 text-sm text-[#8b8d91]">
                            {item.equipment}
                          </p>

                          <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">

                            <div>
                              <p className="text-[10px] uppercase text-[#777]">
                                Duration
                              </p>
                              <p className="mt-1 text-sm font-bold">
                                ⏱ {item.duration}m
                              </p>
                            </div>

                            <div>
                              <p className="text-[10px] uppercase text-[#777]">
                                Calories
                              </p>
                              <p className="mt-1 text-sm font-bold">
                                🔥 {item.caloriesBurned}
                              </p>
                            </div>

                            <div>
                              <p className="text-[10px] uppercase text-[#777]">
                                Rating
                              </p>
                              <p className="mt-1 text-sm font-bold text-[#ccff00]">
                                ★ {item.rating}
                              </p>
                            </div>

                          </div>

                          <Link
                            href={`/workouts/${item.id}`}
                            className="mt-5 block w-full rounded-full border border-white/20 px-4 py-3 text-center text-xs font-black uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
                          >
                            View Details
                          </Link>

                        </div>
                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default MyPlan;