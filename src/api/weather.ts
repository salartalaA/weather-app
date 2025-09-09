import axios from "axios";

const API_KEY = "APQC6HQP7GFWKFR7B8ZQQ4MTA";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const getCurrentWeather = async (city: string) => {
  const { data } = await axios.get(`${BASE_URL}/${city}`, {
    params: {
      unitGroup: "metric",
      key: API_KEY,
      contentType: "json",
    },
  });

  return {
    city: data.address,
    current: data.currentConditions,
  };
};

export const getForecast = async (city: string) => {
  const { data } = await axios.get(`${BASE_URL}/${city}`, {
    params: {
      unitGroup: "metric",
      key: API_KEY,
      contentType: "json",
    },
  });

  return data.days;
};
