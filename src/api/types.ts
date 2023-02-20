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

interface IDailyWeather {
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

interface IDayInWeek {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  speed: number;
  deg: number;
  gust: number;
}

interface ICurrentWeather {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  dt: number;
}

interface IDailyForecast {
  list: IDailyWeather[];
}

interface IFiveDaysForecast {
  list: IDayInWeek[];
}

export {
  type ILocation,
  type IDailyWeather,
  type IDailyForecast,
  type IDayInWeek,
  type IFiveDaysForecast,
  type ICurrentWeather,
};
