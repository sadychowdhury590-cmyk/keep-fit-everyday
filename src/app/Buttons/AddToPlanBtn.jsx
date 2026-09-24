"use client";

import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { toast } from "react-toastify";

const AddToPlanBtn = ({ data }) => {
  const { todayPlan, setTodayPlan } = useContext(userContext);

  const handleAddBtn = () => {
    const alreadyIn = todayPlan.some((card) => card.id === data.id);

    if (alreadyIn) {
      toast.warn(`${data.name} is already added`);
      return;
    }

    setTodayPlan([...todayPlan, data]);
    toast.success(`Successfully added ${data.name}`);
  };

  return (
    <>
      {todayPlan.length >= 5 ? (
        <button
          disabled
          className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-gray-400 px-6 py-4 text-sm font-black uppercase text-gray-600"
        >
          <span className="text-xl">+</span>
          Add to today's plan
        </button>
      ) : (
        <button
          onClick={handleAddBtn}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ccff00] px-6 py-4 text-sm font-black uppercase text-black transition hover:bg-white"
        >
          <span className="text-xl">+</span>
          Add to today's plan
        </button>
      )}
    </>
  );
};

export default AddToPlanBtn;