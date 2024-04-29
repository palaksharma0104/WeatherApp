import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData, Day, CurrentConditions } from '../services/weather-data'; // Adjust path as needed
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-wmain',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wmain.component.html',
  styleUrl: './wmain.component.css'
})

export class WmainComponent implements OnInit {
  
  weatherData: WeatherData | null = null;
  weatherImageSrc = '';

  constructor(private weatherService: WeatherService) {}
  

  cityName: string = '';

  ngOnInit(): void {
    if (this.cityName){
      this.getWeatherData(this.cityName);
    }
    
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