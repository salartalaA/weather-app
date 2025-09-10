import type { ForecastResponse, ForecastDay } from "../types/weather";
import { ForeCastChart } from "./ForeCastChart";

interface Props {
  data: ForecastResponse;
  onSelectDay: (day: ForecastDay) => void;
  selectedDay?: ForecastDay | null;
}

export const DetailsCard = ({ data, onSelectDay, selectedDay }: Props) => {
  const today = selectedDay ?? data?.[0];

  const precipitation = (() => {
    if (today?.precipprob != null) return `${Math.round(today.precipprob)}%`;
    if (today?.precip != null) return `${today.precip} mm`;
    return "0%";
  })();

  const humidity = today?.humidity != null ? `${today.humidity}%` : "-";
  const wind = today?.windspeed != null ? `${today.windspeed} Km/h` : "-";

  const rows = [
    { id: 1, title: "PRECIPITATION", value: precipitation },
    { id: 2, title: "HUMIDITY", value: humidity },
    { id: 3, title: "WIND", value: wind },
  ];

  return (
    <div className="flex flex-col bg-[#222831] w-[350px] sm:w-md md:w-2xl lg:w-[944px] lg:h-[623px] relative p-8 lg:p-12 rounded-3xl text-white">
      <div className="flex flex-col gap-y-4 items-end text-right h-full">
        {rows.map((item) => (
          <div key={item.id} className="flex justify-between w-full lg:w-[42%]">
            <div className="text-sm font-normal md:text-xl md:font-semibold lg:font-bold lg:text-3xl">{item.title}</div>
            <div className="text-base md:text-xl md:font-medium lg:text-3xl">{item.value}</div>
          </div>
        ))}

        <div className="flex-grow" />

        <ForeCastChart
          data={data}
          onSelectDay={onSelectDay}
          selectedDay={selectedDay}
        />
      </div>
    </div>
  );
};
