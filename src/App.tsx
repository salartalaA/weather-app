import { DetailsCard } from "./components/DetailsCard";
import { MainWeatherCard } from "./components/MainWeatherCard";
import { useWeatherContext } from "./context/WeatherContext";

const App = () => {
  const { weather, forecast, loading, error } = useWeatherContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
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
      {weather && <MainWeatherCard data={weather} />}
      {forecast && <DetailsCard data={forecast} />}
    </div>
  );
};

export default App;
