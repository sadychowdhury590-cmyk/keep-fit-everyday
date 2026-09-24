'use client'
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen my-10 items-center justify-center bg-[#0b0b0b] px-5 text-white">
      <div className="mx-auto w-full max-w-2xl text-center">

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
          Fit Log
        </p>

        <h1 className="text-[120px] font-black leading-none tracking-tighter text-[#ccff00] md:text-[180px]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
          Workout Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#8b8d91] md:text-base">
          Looks like this page took a rest day. The workout or page you are
          looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="rounded-full bg-[#ccff00] px-7 py-3 text-sm font-black uppercase text-black transition hover:bg-white"
          >
            Go to Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-black uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            My Plan
          </Link>

        </div>

        <div className="mx-auto mt-12 h-px max-w-xs bg-white/10" />

        <p className="mt-5 text-xs uppercase tracking-widest text-[#555]">
          Keep moving. Keep getting stronger.
        </p>

      </div>
    </main>
  );
};

export default NotFound;