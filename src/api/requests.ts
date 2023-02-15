import { IForecast, ILocation, IWeather } from "./types";
import config from "./config";

/**
 * Функция для поиска местоположений по текстовому запросу
 * @param { string } userInput - пользовательский ввод в строку поиска
 * @returns
 */
async function getCities(userInput: string) {
  const url = new URL("http://api.openweathermap.org/geo/1.0/direct");
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
 * Загрузка подробного прогноза на день
 * @param { import ("./types").ILocation } location - объект места для которого загружается погода
 * @param { number } parts - количество timestamp для которых загружается погода
 * @returns
 */
async function getDaily(location: ILocation, parts: number) {
  const url = new URL("http://api.openweathermap.org/data/2.5/forecast");
  url.search = new URLSearchParams({
    lat: location.lat.toString(),
    lon: location.lon.toString(),
    units: "metric",
    cnt: parts.toString(),
    lang: "ru",
    appid: config.API_KEY,
  }).toString();
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const forecast = await response.json();
      return forecast;
    }
    throw new Error(`Response status code is ${response.status}!`);
  } catch {
    return {};
  }
}

async function getFiveDays(location: ILocation) {
  const url = new URL("http://api.openweathermap.org/data/2.5/forecast");
  url.search = new URLSearchParams({
    lat: location.lat.toString(),
    lon: location.lon.toString(),
    units: "metric",
    cnt: "5",
    lang: "ru",
    appid: config.API_KEY,
  }).toString();
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const fiveDaysForecast = await response.json();
      return fiveDaysForecast;
    }
    throw new Error(`Response status code is ${response.status}!`);
  } catch {
    return {};
  }
}

export { getCities, getDaily };
