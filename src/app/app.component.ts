import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherData, Day, CurrentConditions } from './services/weather-data'; // Adjust path as needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  
  weatherData: WeatherData | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData()
      .subscribe(
        (data) => {
          this.weatherData = data;
          console.log(this.weatherData);
        }
      );
    
  }


}
