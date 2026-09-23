import React from "react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-4 text-white">
      <div className="flex flex-col items-center justify-center text-center">

        <div className="mb-5">
          <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
        </div>

        <h2 className="text-2xl font-bold sm:text-3xl">
          Loading Workout Details...
        </h2>

        <p className="mt-2 max-w-md text-sm text-[#8b8d91] sm:text-base">
          We’re preparing your workout details, instructions, and training
          information. Please wait a moment.
        </p>

      </div>
    </div>
  );
};

export default GlobalLoading;