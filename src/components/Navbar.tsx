import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserLocation, openWeatherMap } from "../api/openWeatherMap";

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

export const Navbar: React.FC = () => {
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
    <div className="navbar-container" >
      <div className="navbar-container_time">
        <h1>Tasker</h1>
        <div className="navbar-container_time-weater">
          <p>Max: {formatTemp(openWeaterData?.temp_max)}°C</p>
          <p>Min: {formatTemp(openWeaterData?.temp_min)}°C</p>
          <p>Hum: {openWeaterData?.humidity}%</p>
        </div>
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>Task gestor</li>
          </Link>
          <Link to="/guides">
            <li>Guide</li>
          </Link>
          <Link to="/about">
            <li>About it</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

