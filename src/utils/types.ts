export type CityType = {
  id: number,
  name: string;
}

export type WeatherType = {
  id: number,
  main: string,
  description: string,
  icon: string,
};

export type CityWeather = {
  coord: {
    lon: number,
    lat: number
  },
  weather: Array<WeatherType>,
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
    sea_level?: number,
    grnd_level?: number,
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  rain?: {
    '1h'?: number,
    '3h'?: number
  },
  snow?: {
    '1h'?: number,
    '3h'?: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type?: number,
    id?: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

export type CityForecast = {
  cod: string,
  message: number,
  cnt: number,
  list: Array<WeatherForecast>,
  city: {
    id: number,
    name: string,
    coord: {
      lat: number,
      lon: number,
    },
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
  }
}

export type WeatherForecast = {
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },
  weather: Array<WeatherType>,
  clouds: {
    all: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  pop: number,
  sys: {
    pod: 'n' | 'd'
  },
  rain?: {
    '3h': number
  },
  snow?: {
    '3h': number
  },
  dt_txt: string
}
