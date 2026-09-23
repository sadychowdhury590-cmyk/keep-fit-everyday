'use client'
import { createContext, useState } from "react";

export const userContext=createContext()

const UserProvider = ({children}) => {
    const[todayPlan,setTodayPlan]=useState([])
    const[save,setSave]=useState([])
    const values={
        todayPlan,setTodayPlan,save,setSave
    }
    return ( 
        <userContext.Provider value={values}>{children}</userContext.Provider>
     );
};

export default UserProvider;