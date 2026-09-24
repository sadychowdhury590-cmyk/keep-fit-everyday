'use client'
import Image from "next/image";
import logo from "../../../../assests/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { userContext } from "@/app/context/UserContext";

const Navbar = () => {
  const {todayPlan,save}=useContext(userContext)
  const link = (
    <>
      <Link
        href="/"
        className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-medium text-black"
      >
        Workouts
      </Link>

      <Link
        href="/my-plan"
        className="rounded-full px-6 py-3 text-sm font-medium text-[#8b8d91]"
      >
        My Plan
      </Link>
    </>
  );

  return (
    <div className="container mx-auto">
      <nav className="w-full border-b border-[#1d2024] bg-[#0b0d0f] px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo */}
          <Link href={'/'} className="flex items-center gap-3">
            <Image
              height={48}
              width={48}
              src={logo}
              alt="FITLOG"
            />

            <span className="text-lg font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            {link}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-7 text-sm">

            {/* Plan */}
            <Link href={'/my-plan'} className="flex items-center gap-3 text-[#b5b6b9]">
              <span>Plan</span>

              <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ccff00] px-2 text-xs font-semibold text-black">
                {todayPlan.length>0?todayPlan.length:0}
              </span>
            </Link>

            {/* Saved */}
            <Link href={'/my-plan'} className="flex items-center gap-3 text-[#b5b6b9]">
              <span>Saved</span>

              <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-[#3b3e42] px-2 text-xs text-white">
                {save.length>0?save.length:0}
              </span>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;