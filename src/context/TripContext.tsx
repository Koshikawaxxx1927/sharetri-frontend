"use client";

import { TripType } from "@/types";
import React, { useContext, useState } from "react";
import { createContext } from "react";

interface TripContextProps {
  children: React.ReactNode;
}

const TripContext = createContext<TripType[]>([]);
const TripUpdateContext = createContext<
  React.Dispatch<React.SetStateAction<TripType[]>>
>(() => {});

export const TripProvider = ({ children }: TripContextProps) => {
  const [trips, setTrips] = useState<TripType[]>([]);
  return (
    <TripContext.Provider value={trips}>
      <TripUpdateContext.Provider value={setTrips}>
        {children}
      </TripUpdateContext.Provider>
    </TripContext.Provider>
  );
};

export const useTrips = () => useContext<TripType[]>(TripContext);
export const useUpdateTrips = () => useContext(TripUpdateContext);
