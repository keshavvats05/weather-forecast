import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { weatherData } from './Model/weather.model';
import { weatherService } from './services/weatherService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  cityName="patna";
  constructor(private weatherService:weatherService){}
  weatherData?:weatherData;
  
  ngOnInit(){
    this.getWeatherData(this.cityName);

   }
   onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
   }

   private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next :(response)=>{
        this.weatherData=response,
        console.log(this.weatherData);

      }
    })
   }
  }

