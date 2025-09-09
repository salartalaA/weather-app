import { useState, useEffect } from "react";
import { getCurrentWeather, getForecast } from "../api/weather";
import type { WeatherResponse, ForecastResponse } from "../types/weather";

export const useWeather = (initialCity: string) => {
  const [city, setCity] = useState(initialCity);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    try {
      const current = await getCurrentWeather(cityName);
      const forecastData = await getForecast(cityName);
      setWeather(current);
      setForecast(forecastData);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return { city, setCity, weather, forecast, loading, error };
};
