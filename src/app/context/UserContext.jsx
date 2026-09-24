"use client";

import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [save, setSave] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const storedPlan = localStorage.getItem("todayPlan");
    const storedSave = localStorage.getItem("save");

    if (storedPlan) {
      setTodayPlan(JSON.parse(storedPlan));
    }

    if (storedSave) {
      setSave(JSON.parse(storedSave));
    }

    setHydrated(true);
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "todayPlan",
      JSON.stringify(todayPlan)
    );
  }, [todayPlan, hydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "save",
      JSON.stringify(save)
    );
  }, [save, hydrated]);

  const values = {
    todayPlan,
    setTodayPlan,
    save,
    setSave,
  };

  return (
    <userContext.Provider value={values}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;