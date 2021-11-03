import React, { useEffect } from "react";
import { getCurrent } from "../api/current-weather";
import { WeatherData } from "../types/weather-types";
import CitySelector from "./city-selector";
import {
  BottomMarginedDiv,
  ColdMainDiv,
  Footer,
  Header,
  TopMarginedDiv,
  WarmMainDiv,
  Wrapper,
} from "./styles";

const Main = () => {
  const [city, setCity] = React.useState("Tirana");

  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(
    null
  );

  const [loading, setLoading] = React.useState(false);

  const isCold = weatherData && weatherData?.main.temp < 10;

  const MainDiv = isCold ? ColdMainDiv : WarmMainDiv;

  useEffect(() => {
    setLoading(true);
    getCurrent(city).then((r) => {
      setWeatherData(r);
      setLoading(false);
    });
  }, [city]);

  const handleChange = (c: string) => {
    setCity(c);
  };

  return (
    <Wrapper>
      <Header>Weather App</Header>
      <TopMarginedDiv />
      <MainDiv>
        <BottomMarginedDiv />
        <CitySelector onChange={handleChange} city={city} />
        {loading || !weatherData ? (
          "Loading"
        ) : (
          <BottomMarginedDiv>
            <div>
              Temperature in <strong>{city}</strong> is {weatherData.main.temp}{" "}
              °C{" "}
            </div>
            <BottomMarginedDiv />
            <div>
              Humidity in {city} today will be{" "}
              <strong>{weatherData.main.humidity}</strong>
            </div>
            <BottomMarginedDiv />
            <div>
              Feels like<strong> {weatherData.main.feels_like}°C</strong>
              <BottomMarginedDiv />
              <div>
                Temperatures are expected to vary from{" "}
                {weatherData.main.temp_min}°C to {weatherData.main.temp_max}°C
              </div>
              <BottomMarginedDiv />
              <div>
                The wind is expected to travel at an average speed of{" "}
                {weatherData.wind.speed} km/h
              </div>
            </div>
          </BottomMarginedDiv>
        )}
      </MainDiv>
      <Footer>App created by Endri</Footer>
    </Wrapper>
  );
};

export default Main;
