"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { userContext } from "../context/UserContext";
import { toast } from "react-toastify";

const MyPlan = () => {
  const {
    todayPlan = [],
    setTodayPlan,
    save = [],
    setSave,
  } = useContext(userContext);

  const [sortBy, setSortBy] = useState("Duration");
  const [plan, setPlan] = useState("today");

  const handleTab = () => {
    setPlan("today");
  };

  const handleTab2 = () => {
    setPlan("save");
  };

  const minutes = todayPlan.reduce(
    (total, item) => total + Number(item.duration || 0),
    0
  );

  const calories = todayPlan.reduce(
    (total, item) => total + Number(item.caloriesBurned || 0),
    0
  );

  const handleRemove = (id) => {

    const remaining = todayPlan.filter((item) => item.id !== id);
    setTodayPlan(remaining);
    toast.success("Successfully deleted TodayPlan item")
  };

  const handleRemoveSave = (id) => {
    const remaining = save.filter((item) => item.id !== id);
    setSave(remaining);
    toast.success("Successfully deleted save item")
  };

  const currentList = plan === "today" ? todayPlan : save;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "Duration") {
      return Number(a.duration || 0) - Number(b.duration || 0);
    }

    if (sortBy === "Calories") {
      return (
        Number(a.caloriesBurned || 0) -
        Number(b.caloriesBurned || 0)
      );
    }

    if (sortBy === "Rating") {
      return Number(b.rating || 0) - Number(a.rating || 0);
    }

    return 0;
  });

  return (
    <main className="my-8 min-h-screen bg-[#0b0b0b] px-5 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 text-sm text-[#8b8d91] md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b8d91]">
              Exercises
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#ccff00]">
              {todayPlan.length}
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

        {/* Tabs */}
        <div className="mt-10">

          <div className="tabs tabs-lift w-full">

            {/* Today's Plan Tab */}

            <input
              onClick={handleTab}
              type="radio"
              name="my_plan_tabs"
              className="tab text-white [--tab-color:#ccff00] checked:text-black"
              aria-label="Today's Plan"
              defaultChecked
            />

            <div className="tab-content min-h-[300px] w-full border-base-300 bg-[#151515] p-6 text-white">

              {/* Sort */}
              <div className="mb-6 flex items-center justify-end gap-3">

                <label className="text-sm font-bold text-gray-400">
                  Sort By
                </label>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="select select-success bg-[#0b0b0b] text-white"
                >
                  <option value="Duration">
                    Duration
                  </option>

                  <option value="Calories">
                    Calories
                  </option>

                  <option value="Rating">
                    Rating
                  </option>
                </select>

              </div>

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

                  <div className="space-y-4">

                    {sortedList.map((item) => (

                      <div
                        key={item.id}
                        className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] sm:flex-row"
                      >

                        {/* Image */}
                        <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-52">

                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />

                        </div>

                        {/* Info */}
                        <div className="flex flex-1 flex-col justify-between p-5">

                          <div>

                            <h3 className="text-xl font-black uppercase">
                              {item.name}
                            </h3>

                            <p className="mt-2 text-sm text-[#8b8d91]">
                              {item.equipment}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-6 border-t border-white/10 pt-4">

                              <div>
                                <p className="text-[10px] uppercase text-[#777]">
                                  Duration
                                </p>

                                <p className="mt-1 text-sm font-bold">
                                  ⏱ {item.duration || 0}m
                                </p>
                              </div>

                              <div>
                                <p className="text-[10px] uppercase text-[#777]">
                                  Calories
                                </p>

                                <p className="mt-1 text-sm font-bold">
                                  🔥 {item.caloriesBurned || 0}
                                </p>
                              </div>

                              <div>
                                <p className="text-[10px] uppercase text-[#777]">
                                  Rating
                                </p>

                                <p className="mt-1 text-sm font-bold text-[#ccff00]">
                                  ★ {item.rating || 0}
                                </p>
                              </div>

                            </div>

                          </div>

                          <div className="mt-5 flex flex-wrap gap-2">

                            <Link
                              href={`/LibraryAll/${item.id}`}
                              className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-xs font-bold uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
                            >
                              View Details
                            </Link>

                            <button
                              onClick={() => handleRemove(item.id)}
                              className="flex-1 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black transition hover:bg-white"
                            >
                              Mark as Done
                            </button>

                            <button
                              onClick={() => handleRemove(item.id)}
                              className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase transition hover:border-red-500 hover:text-red-500"
                            >
                              ✕
                            </button>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              )}

            </div>

            {/* Saved Tab */}

            <input
              type="radio"
              name="my_plan_tabs"
              onClick={handleTab2}
              className="tab text-white [--tab-color:#ccff00] checked:text-black"
              aria-label="Saved"
            />

            <div className="tab-content min-h-[300px] w-full border-base-300 bg-[#151515] p-6 text-white">

              {/* Sort */}
              <div className="mb-6 flex items-center justify-end gap-3">

                <label className="text-sm font-bold text-gray-400">
                  Sort By
                </label>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="select select-success bg-[#0b0b0b] text-white"
                >
                  <option value="Duration">
                    Duration
                  </option>

                  <option value="Calories">
                    Calories
                  </option>

                  <option value="Rating">
                    Rating
                  </option>
                </select>

              </div>

              {save.length === 0 ? (

                <div className="flex min-h-[250px] flex-col items-center justify-center text-center">

                  <h2 className="text-2xl font-black uppercase text-white">
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

                  <h2 className="mb-6 text-xl font-bold uppercase text-white">
                    Saved
                  </h2>

                  <div className="space-y-4">

                    {sortedList.map((item) => (

                      <div
                        key={item.id}
                        className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] sm:flex-row"
                      >

                        <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-52">

                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />

                        </div>

                        <div className="flex flex-1 flex-col justify-between p-5">

                          <div>

                            <h3 className="text-xl font-black uppercase">
                              {item.name}
                            </h3>

                            <p className="mt-2 text-sm text-[#8b8d91]">
                              {item.equipment}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-6 border-t border-white/10 pt-4">

                              <div>
                                <p className="text-[10px] uppercase text-[#777]">
                                  Duration
                                </p>

                                <p className="mt-1 text-sm font-bold">
                                  ⏱ {item.duration || 0}m
                                </p>
                              </div>

                              <div>
                                <p className="text-[10px] uppercase text-[#777]">
                                  Calories
                                </p>

                                <p className="mt-1 text-sm font-bold">
                                  🔥 {item.caloriesBurned || 0}
                                </p>
                              </div>

                              <div>
                                <p className="text-[10px] uppercase text-[#777]">
                                  Rating
                                </p>

                                <p className="mt-1 text-sm font-bold text-[#ccff00]">
                                  ★ {item.rating || 0}
                                </p>
                              </div>

                            </div>

                          </div>

                          <div className="mt-5 flex flex-wrap gap-2">

                            <Link
                              href={`/LibraryAll/${item.id}`}
                              className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-xs font-black uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
                            >
                              View Details
                            </Link>

                            <button
                              onClick={() => handleRemoveSave(item.id)}
                              className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase transition hover:border-red-500 hover:text-red-500"
                            >
                              ✕
                            </button>

                          </div>

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