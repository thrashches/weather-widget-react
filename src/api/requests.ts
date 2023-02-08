import config from "./config";


// Загрузка списка городов по запросу

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

export { getCities };
