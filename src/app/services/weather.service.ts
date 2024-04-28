import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { WeatherData, Day, CurrentConditions } from './weather-data';


@Injectable({ providedIn: 'root' })
export class WeatherService {
  // constructor(private http: HttpClient) {}

  
  // getWeatherData(cityname: string): Observable<WeatherData> {
  //   const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}/today?unitGroup=metric&elements=datetime%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeedmean%2Cstations&include=remote%2Cfcst%2Ccurrent&key=J7V4XDMLMNU2XNNGP885GE7AP&maxStations=1&options=nonulls&contentType=json`;
  //   console.log("here");
  //   return this.http.get<WeatherData>(apiUrl).pipe(map((jsonData: WeatherData) => jsonData));
  // }



  constructor(private http: HttpClient) {}

  getWeatherData(cityname: String): Observable<WeatherData> {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}/today?unitGroup=metric&elements=datetime%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeedmean%2Cstations&include=remote%2Cfcst%2Ccurrent&key=J7V4XDMLMNU2XNNGP885GE7AP&maxStations=1&options=nonulls&contentType=json`;
    return this.http.get<WeatherData>(apiUrl);
  }

}
