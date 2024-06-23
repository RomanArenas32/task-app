import axios from "axios";

const apiKey: string = `a7b38d282de49219d017e0e877efd01b`;

export const openWeatherMap = async (
  lat: number,
  lon: number
): Promise<any> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const data = axios.get(url);
  return data
};

export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert("Failed to obtain your geolocation");
        console.log(err);
        reject();
      }
    );
  });
};
