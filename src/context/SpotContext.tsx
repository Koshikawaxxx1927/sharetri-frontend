"use client";

import { SpotType } from "@/types";
import React, { useContext, useState } from "react";
import { createContext } from "react";

interface SpotContextProps {
  children: React.ReactNode;
}

const SpotContext = createContext<SpotType[]>([]);
const SpotUpdateContext = createContext<
  React.Dispatch<React.SetStateAction<SpotType[]>>
>(() => {});

export const SpotProvider = ({ children }: SpotContextProps) => {
  const [spots, setSpots] = useState<SpotType[]>([]);
  return (
    <SpotContext.Provider value={spots}>
      <SpotUpdateContext.Provider value={setSpots}>
        {children}
      </SpotUpdateContext.Provider>
    </SpotContext.Provider>
  );
};

export const useSpots = () => useContext<SpotType[]>(SpotContext);
export const useUpdateSpots = () => useContext(SpotUpdateContext);
