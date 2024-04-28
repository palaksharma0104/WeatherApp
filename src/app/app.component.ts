import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherData, Day, CurrentConditions } from './services/weather-data'; // Adjust path as needed
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  
  weatherData: WeatherData | null = null;
  weatherImageSrc = '';

  constructor(private weatherService: WeatherService) {}

  cityName: string = '';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe(
        (data) => {
          this.weatherData = data;
          console.log(this.weatherData);

          const temp = data?.days?.[0]?.temp;
          this.weatherImageSrc = temp > 15 ? '../assets/hot.jpg' : '../assets/cold.jpg'; // Adjust image paths
      
        }
      );
  }

}
