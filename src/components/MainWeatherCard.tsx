import cover from "@/assets/cover.svg";
import { SlLocationPin } from "react-icons/sl";
import { BsSun } from "react-icons/bs";
import type { WeatherResponse } from "../types/weather";

interface Props {
  data: WeatherResponse;
}

export const MainWeatherCard = ({ data }: Props) => {
  const { city, current } = data;

  const today = new Date();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="absolute bottom-0.5 w-[493px] p-9 rounded-4xl shadow-lg z-10 h-full text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#88EBEF] to-[#535BE6] opacity-80 rounded-4xl"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-col gap-y-4">
          <div className="text-4xl font-bold">{weekday}</div>
          <div className="text-xl font-medium">{date}</div>
          <div className="flex gap-x-2 items-center">
            <SlLocationPin className="size-7" />
            <div className="text-xl font-semibold">{city}</div>
          </div>
        </div>

        <div className="flex-grow"></div>

        <div className="flex flex-col gap-y-3 mb-8">
          <BsSun className="size-24" />
          <div className="text-5xl font-bold">{`${current.temp} °C`}</div>
          <div className="text-3xl font-bold">{current.conditions}</div>
        </div>
      </div>
    </div>
  );
};
