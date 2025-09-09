import type { ForecastResponse } from "../types/weather";
import { ForeCastChart } from "./ForeCastChart";

interface Props {
  data: ForecastResponse;
}

export const DetailsCard = ({ data }: Props) => {
  const today = data?.[0];

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
    <div className="flex flex-col bg-[#222831] w-[944px] h-[623px] relative p-12 rounded-3xl text-white">
      <div className="flex flex-col gap-y-4 items-end text-right h-full">
        {rows.map((item) => (
          <div key={item.id} className="flex justify-between w-[42%]">
            <div className="font-bold text-3xl">{item.title}</div>
            <div className="font-medium text-3xl">{item.value}</div>
          </div>
        ))}

        <div className="flex-grow"></div>

        <ForeCastChart data={data} />
      </div>
    </div>
  );
};
