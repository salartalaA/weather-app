export interface CurrentConditions {
  datetime: string;
  temp: number;
  humidity?: number;
  windspeed?: number;
  conditions: string;
  icon?: string;
}

export interface ForecastDay {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp?: number;
  conditions: string;
  icon?: string;

  humidity?: number;
  windspeed?: number;
  precip?: number;
  precipprob?: number;
}

export interface WeatherResponse {
  city: string;
  current: CurrentConditions;
}

export type ForecastResponse = ForecastDay[];
