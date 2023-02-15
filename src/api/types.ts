/**
 * Интерфейс местоположения
 */
interface ILocation {
  name: string;
  state: string;
  country: string;
  local_names: {
    ru?: string;
  };
  lat: number;
  lon: number;
}

interface IWeather {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: 100;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  dt_txt: string;
}

interface IForecast {
  list: IWeather[];
}

export { type ILocation, type IWeather, type IForecast };
