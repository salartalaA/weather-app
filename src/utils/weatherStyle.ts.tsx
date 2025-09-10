import coverSunny from "@/assets/cover-sunny.png";
import coverCloudy from "@/assets/cover-cloudy.png";
import coverSnowy from "@/assets/cover-snowy.png";
import coverRainy from "@/assets/cover-rainy.png";
import coverFog from "@/assets/cover-fog.png";
import coverThunder from "@/assets/cover-thunder.png";
import coverDrizzle from "@/assets/cover-drizzle.png";
import coverHail from "@/assets/cover-hail.png";
import coverDefault from "@/assets/cover-default.png";

import { BsSun, BsCloud, BsCloudRain, BsSnow } from "react-icons/bs";

interface WeatherStyle {
  backgroundImage: string;
  gradientClass: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export const getWeatherStyle = (conditions?: string): WeatherStyle => {
  const cond = (conditions ?? "").toLowerCase();

  const mapping: { [key: string]: WeatherStyle } = {
    sun: {
      backgroundImage: coverSunny,
      gradientClass: "from-[#88EBEF] to-[#535BE6] opacity-65",
      Icon: BsSun,
    },
    clear: {
      backgroundImage: coverSunny,
      gradientClass: "from-[#88EBEF] to-[#535BE6] opacity-65",
      Icon: BsSun,
    },
    cloud: {
      backgroundImage: coverCloudy,
      gradientClass: "from-[#7a8fa6] to-[#3c4a57] opacity-80",
      Icon: BsCloud,
    },
    snow: {
      backgroundImage: coverSnowy,
      gradientClass: "from-[#4a4a4a] to-[#222831] opacity-90",
      Icon: BsSnow,
    },
    hail: {
      backgroundImage: coverHail,
      gradientClass: "from-[#5a5a5a] to-[#2a2a2a] opacity-90",
      Icon: BsSnow,
    },
    rain: {
      backgroundImage: coverRainy,
      gradientClass: "from-[#5c6b73] to-[#2c3b41] opacity-85",
      Icon: BsCloudRain,
    },
    drizzle: {
      backgroundImage: coverDrizzle,
      gradientClass: "from-[#6b7a85] to-[#3a4a51] opacity-85",
      Icon: BsCloudRain,
    },
    thunder: {
      backgroundImage: coverThunder,
      gradientClass: "from-[#3b3b4a] to-[#1a1a22] opacity-90",
      Icon: BsCloudRain,
    },
    storm: {
      backgroundImage: coverThunder,
      gradientClass: "from-[#3b3b4a] to-[#1a1a22] opacity-90",
      Icon: BsCloudRain,
    },
    fog: {
      backgroundImage: coverFog,
      gradientClass: "from-[#7e7e7e] to-[#3f3f3f] opacity-80",
      Icon: BsCloud,
    },
    mist: {
      backgroundImage: coverFog,
      gradientClass: "from-[#7e7e7e] to-[#3f3f3f] opacity-80",
      Icon: BsCloud,
    },
  };

  // جستجوی کلید مناسب
  for (const key in mapping) {
    if (cond.includes(key)) return mapping[key];
  }

  // پیش‌فرض
  return {
    backgroundImage: coverDefault,
    gradientClass: "from-[#888888] to-[#444444] opacity-80",
    Icon: BsCloud,
  };
};
