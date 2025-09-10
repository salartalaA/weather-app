import type { ForecastResponse, ForecastDay } from "../types/weather";
import { LocationButton } from "./LocationButton";
import { BsSun, BsCloud, BsCloudRain } from "react-icons/bs";
import { motion } from "framer-motion";

interface Props {
  data: ForecastResponse;
  onSelectDay: (day: ForecastDay) => void;
  selectedDay?: ForecastDay | null;
}

export const ForeCastChart = ({ data, onSelectDay, selectedDay }: Props) => {
  const forecastData = data.slice(0, 4).map((day) => {
    const weekday = new Date(day.datetime).toLocaleDateString("en-US", {
      weekday: "short",
    });

    let Icon = BsCloud;
    const cond = (day.conditions ?? "").toLowerCase();
    if (cond.includes("sun") || cond.includes("clear")) Icon = BsSun;
    else if (cond.includes("rain")) Icon = BsCloudRain;

    return {
      day: weekday,
      icon: Icon,
      temp: Math.round(day.temp ?? day.tempmax ?? 0),
      fullData: day,
    };
  });

  return (
    <div className="w-full lg:w-[42%] flex flex-col items-center gap-y-14 md:gap-y-[71px]">
      <div className="flex justify-between gap-0.5 md:gap-4 lg:gap-1 mt-8">
        {forecastData.map((item, index) => {
          const Icon = item.icon;
          const isSelected =
            selectedDay != null &&
            selectedDay.datetime === item.fullData.datetime;

          return (
            <motion.button
              key={index}
              type="button"
              onClick={() => onSelectDay(item.fullData)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl gap-y-2 md:gap-y-4 cursor-pointer
                ${
                  isSelected
                    ? "!bg-white text-black ring-2 ring-white"
                    : "bg-[#272E37] text-white"
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="size-10 md:size-14" />
              <div className="text-sm md:text-xl font-normal">{item.day}</div>
              <div className="text-sm md:text-xl font-bold">{item.temp}°C</div>
            </motion.button>
          );
        })}
      </div>
      <LocationButton />
    </div>
  );
};
