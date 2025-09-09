"use client";
import React, { createContext, useContext } from "react";
import { useWeather } from "@/hooks/useWeather";

type WeatherCtx = ReturnType<typeof useWeather>;
const WeatherContext = createContext<WeatherCtx | null>(null);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const weather = useWeather("Osaka");
  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const ctx = useContext(WeatherContext);
  if (!ctx)
    throw new Error("useWeatherContext must be used inside WeatherProvider");
  return ctx;
};
