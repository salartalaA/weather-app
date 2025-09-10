import { SlLocationPin } from "react-icons/sl";
import type { WeatherResponse, ForecastDay } from "../types/weather";
import { motion, AnimatePresence } from "framer-motion";
import { getWeatherStyle } from "@/utils/weatherStyle.ts";

interface Props {
  data: WeatherResponse;
  selectedDay: ForecastDay;
}

export const MainWeatherCard = ({ data, selectedDay }: Props) => {
  const { city } = data;
  const dateObj = new Date(selectedDay.datetime);
  const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  const date = dateObj.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const { backgroundImage, gradientClass, Icon } = getWeatherStyle(
    selectedDay.conditions
  );

  return (
    <div className="relative lg:absolute bottom-0.5 w-[350px] sm:w-md md:w-2xl lg:w-[493px] h-full rounded-4xl shadow-lg z-10 text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={backgroundImage}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-4xl`}
      />

      <motion.div
        className="relative z-10 flex flex-col h-full p-9"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-y-4">
          <motion.div
            className="text-2xl lg:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {weekday}
          </motion.div>
          <motion.div
            className="text-sm lg:text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {date}
          </motion.div>
          <motion.div
            className="flex gap-x-2 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <SlLocationPin className="size-7" />
            <div className="text-xs md:text-xl font-semibold">{city}</div>
          </motion.div>
        </div>

        <div className="flex-grow" />

        <motion.div
          className="flex flex-col items-center lg:items-start gap-y-3 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        >
          <Icon className="size-20 md:size-24" />
          <div className="text-xl md:text-2xl lg:text-5xl font-bold">
            {`${Math.round(selectedDay.temp ?? selectedDay.tempmax ?? 0)} °C`}
          </div>
          <div className="text-base md:text-3xl font-bold">
            {selectedDay.conditions}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
