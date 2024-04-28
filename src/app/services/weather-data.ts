
export interface WeatherData {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    days: Day[];
    currentConditions: CurrentConditions;
  }
  
  export interface Day {
    datetime: string;
    tempmax: number;
    tempmin: number;
    temp: number;
    feelslike: number;
    humidity: number;
    windspeedmean: number;
    stations: any[]; // Assuming unknown structure for stations
  }
  
  export interface CurrentConditions {
    datetime: string;
    temp: number;
    feelslike: number;
    humidity: number;
    stations: any[]; // Assuming unknown structure for stations
  }