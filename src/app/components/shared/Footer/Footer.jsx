
import Image from "next/image";
import logo from "../../../../assests/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={32}
            height={32}
          />
          <h2 className="text-xl font-bold tracking-wide">FITLOG</h2>
        </div>

        {/* Right */}
        <p className="text-center text-sm text-[#8b8d91]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

