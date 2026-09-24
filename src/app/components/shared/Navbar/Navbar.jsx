"use client";

import Image from "next/image";
import logo from "../../../../assests/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { userContext } from "@/app/context/UserContext";

const Navbar = () => {
  const { todayPlan, save } = useContext(userContext);

  const link = (
    <>
      <Link
        href="/"
        className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-medium text-black sm:px-6 sm:py-3 sm:text-sm"
      >
        Workouts
      </Link>

      <Link
        href="/my-plan"
        className="rounded-full px-4 py-2 text-xs font-medium text-[#8b8d91] sm:px-6 sm:py-3 sm:text-sm"
      >
        My Plan
      </Link>
    </>
  );

  return (
    <div className="container mx-auto">
      <nav className="w-full border-b border-[#1d2024] bg-[#0b0d0f] px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              height={48}
              width={48}
              src={logo}
              alt="FITLOG"
              className="h-9 w-9 sm:h-12 sm:w-12"
            />

            <span className="text-base font-bold tracking-wide text-white sm:text-lg">
              FITLOG
            </span>
          </Link>

          {/* Navigation */}
          <div className="order-3 flex w-full items-center justify-center gap-1 sm:order-none sm:w-auto sm:gap-3">
            {link}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 text-xs sm:gap-7 sm:text-sm">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-[#b5b6b9] sm:gap-3"
            >
              <span>Plan</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-semibold text-black sm:h-7 sm:min-w-7 sm:px-2 sm:text-xs">
                {todayPlan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-[#b5b6b9] sm:gap-3"
            >
              <span>Saved</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#3b3e42] px-1.5 text-[10px] text-white sm:h-7 sm:min-w-7 sm:px-2 sm:text-xs">
                {save.length}
              </span>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;