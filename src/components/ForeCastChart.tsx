import type { ForecastResponse } from "../types/weather";
import { LocationButton } from "./LocationButton";
import { BsSun, BsCloud, BsCloudRain } from "react-icons/bs";

interface Props {
  data: ForecastResponse;
}

export const ForeCastChart = ({ data }: Props) => {
  const forecastData = data.slice(0, 4).map((day) => {
    const weekday = new Date(day.datetime).toLocaleDateString("en-US", {
      weekday: "short",
    });

    let Icon = BsCloud;
    const cond = day.conditions.toLowerCase();
    if (cond.includes("sun") || cond.includes("clear")) Icon = BsSun;
    else if (cond.includes("rain")) Icon = BsCloudRain;

    return {
      day: weekday,
      icon: Icon,
      temp: Math.round(day.temp ?? day.tempmax ?? 0),
    };
  });

  return (
    <div className="w-[42%] flex flex-col items-center gap-y-[71px]">
      <div className="flex justify-between gap-1 mt-8">
        {forecastData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-xl gap-y-4
              ${
                index === 0 ? "bg-white text-black" : "bg-[#272E37] text-white"
              }`}
            >
              <Icon className="size-14" />
              <div className="text-xl font-normal">{item.day}</div>
              <div className="text-xl font-bold">{item.temp}°C</div>
            </div>
          );
        })}
      </div>
      <LocationButton />
    </div>
  );
};
