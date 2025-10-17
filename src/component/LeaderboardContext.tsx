"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LeaderboardContextType {
  isLeaderboardOpen: boolean;
  setLeaderboardOpen: (open: boolean) => void;
  isAskOpen: boolean;
  setAskOpen: (open: boolean) => void;
}

const LeaderboardContext = createContext<LeaderboardContextType | undefined>(undefined);

export function LeaderboardProvider({ children }: { children: ReactNode }) {
  const [isLeaderboardOpen, setLeaderboardOpen] = useState(false);
  const [isAskOpen, setAskOpen] = useState(false);

  return (
    <LeaderboardContext.Provider
      value={{ isLeaderboardOpen, setLeaderboardOpen, isAskOpen, setAskOpen }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
}

export function useLeaderboard() {
  const context = useContext(LeaderboardContext);
  if (!context) throw new Error("useLeaderboard must be used inside LeaderboardProvider");
  return context;
}
