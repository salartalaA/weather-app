import { useEffect, useState } from "react";
import { DetailsCard } from "./components/DetailsCard";
import { MainWeatherCard } from "./components/MainWeatherCard";
import { useWeatherContext } from "./context/WeatherContext";
import type { ForecastDay } from "./types/weather";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-gray-900">
      <motion.div
        className="w-20 h-20 rounded-full relative bg-gradient-to-br from-[#88EBEF] to-[#535BE6] p-[4px] shadow-[0_0_20px_rgba(0,255,255,0.7)]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <div className="w-full h-full bg-gray-900 rounded-full" />
      </motion.div>
    </div>
  );
};

const App = () => {
  const { weather, forecast, loading, error } = useWeatherContext();
  const [selectedDay, setSelectedDay] = useState<ForecastDay | null>(null);

  useEffect(() => {
    if (forecast && forecast.length > 0) {
      setSelectedDay(forecast[0]);
    }
  }, [forecast]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        window.location.href = '/'
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="flex justify-between items-start relative w-full p-4 gap-4">
      {weather && selectedDay && (
        <MainWeatherCard data={weather} selectedDay={selectedDay} />
      )}
      {forecast && (
        <DetailsCard
          data={forecast}
          onSelectDay={setSelectedDay}
          selectedDay={selectedDay}
        />
      )}
    </div>
  );
};

export default App;
