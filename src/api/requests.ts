import { ILocation } from "./types";
import config from "./config";

/**
 * Функция для поиска местоположений по текстовому запросу
 * @param { string } userInput - пользовательский ввод в строку поиска
 * @returns
 */
async function getCities(userInput: string) {
  const url = new URL("https://api.openweathermap.org/geo/1.0/direct");
  url.search = new URLSearchParams({
    limit: "15",
    q: userInput,
    appid: config.API_KEY,
  }).toString();
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const cities = await response.json();
      return cities;
    }
    throw new Error(`Response status code is ${response.status}!`);
  } catch {
    return [];
  }
}

/**
 * Функция получения населенного пункта для координат пользователя
 * @param { GeolocationPosition } position - объект геопозиции пользователя
 * @returns
 */
async function getCityByPosition(position: GeolocationPosition) {
  const url = new URL("https://api.openweathermap.org/geo/1.0/reverse");
  url.search = new URLSearchParams({
    limit: "1",
    lat: position.coords.latitude.toString(),
    lon: position.coords.longitude.toString(),
    appid: config.API_KEY,
  }).toString();
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const cities: ILocation[] = await response.json();
      if (cities.length) {
        return cities;
      } else {
        throw new Error(
          "Не удается получить погоду для вашего местоположения."
        );
      }
    }
    throw new Error(`Response status code is ${response.status}!`);
  } catch {
    return [];
  }
}

/**
 * Загрузка подробного прогноза на день
 * @param { import ("./types").ILocation } location - объект места для которого загружается погода
 * @param { number } parts - количество timestamp для которых загружается погода
 * @returns
 */
async function getDaily(location: ILocation, parts: number) {
  const url = new URL("https://api.openweathermap.org/data/2.5/forecast");
  url.search = new URLSearchParams({
    lat: location.lat.toString(),
    lon: location.lon.toString(),
    units: "metric",
    cnt: parts.toString(),
    lang: "ru",
    appid: config.API_KEY,
  }).toString();

  const response = await fetch(url);
  if (response.status === 200) {
    const forecast = await response.json();
    return forecast;
  }
  throw new Error(`Response status code is ${response.status}!`);
}

async function getFiveDays(location: ILocation) {
  const url = new URL("https://api.openweathermap.org/data/2.5/forecast/daily");
  url.search = new URLSearchParams({
    lat: location.lat.toString(),
    lon: location.lon.toString(),
    units: "metric",
    cnt: "5",
    lang: "ru",
    appid: config.API_KEY,
  }).toString();

  const response = await fetch(url);
  if (response.status === 200) {
    const fiveDaysForecast = await response.json();
    return fiveDaysForecast;
  }
  throw new Error(`Response status code is ${response.status}!`);
}

async function getCurrent(location: ILocation) {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.search = new URLSearchParams({
    lat: location.lat.toString(),
    lon: location.lon.toString(),
    units: "metric",
    lang: "ru",
    appid: config.API_KEY,
  }).toString();
  const response = await fetch(url);
  if (response.status === 200) {
    const fiveDaysForecast = await response.json();
    return fiveDaysForecast;
  }
  throw new Error(`Response status code is ${response.status}!`);
}

export { getCities, getCityByPosition, getDaily, getFiveDays, getCurrent };
