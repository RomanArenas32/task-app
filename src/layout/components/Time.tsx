import { useEffect, useState } from "react";
import { getUserLocation, openWeatherMap } from "../../api/openWeatherMap";
interface DataTime {
  feels_like?: number;
  grnd_level?: number;
  humidity?: number;
  pressure?: number;
  sea_level?: number;
  temp?: number;
  temp_max?: number;
  temp_min?: number;
}

export const Time = () => {
  const [latLon, setLatLong] = useState<[number, number]>([0, 0]);
  const [openWeaterData, setOpenWeaterData] = useState<DataTime>();

  useEffect(() => {
    const getCoord = async () => {
      try {
        const resp = await getUserLocation();
        setLatLong(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getCoord();
  }, []);

  useEffect(() => {
    const getTime = async () => {
      try {
        const { data } = await openWeatherMap(latLon[0], latLon[1]);
        setOpenWeaterData(data.main);
      } catch (error) {
        console.log(error);
      }
    };
    getTime();
  }, [latLon]);

  const formatTemp = (temp: number | undefined) => {
    if (temp != undefined) {
      return (temp - 273.15).toFixed(1);
    } else {
      return 0;
    }
  };

  return (
    <div className="time">
      <div className="time-cloud">
        <div className="navbar-container_time-weater">
          <p>Max: {formatTemp(openWeaterData?.temp_max)}°C</p>
          <p>Min: {formatTemp(openWeaterData?.temp_min)}°C</p>
          <p>Hum: {openWeaterData?.humidity}%</p>
        </div>
      </div>
      <div className="time-shadow"></div>
    </div>
  );
};
