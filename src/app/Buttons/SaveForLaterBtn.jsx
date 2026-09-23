"use client";

import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { toast } from "react-toastify";

const SaveForLaterBtn = ({ data }) => {
  const { save, setSave } = useContext(userContext);

  const handleSaveBtn = () => {
    const alreadyIn = save.some((card) => card.id === data.id);

    if (alreadyIn) {
      toast.warn(`${data.name} is already Saved`);
      return;
    }

    setSave([...save, data]);

    toast.success(`Successfully Saved ${data.name}`);
  };

  return (
    <button
      onClick={handleSaveBtn}
      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-black uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
    >
      <span className="text-xl">♡</span>
      Save for later
    </button>
  );
};

export default SaveForLaterBtn;