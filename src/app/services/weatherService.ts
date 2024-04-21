import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { environment } from "../environment/environment";
import { weatherData } from "../Model/weather.model";

@Injectable({providedIn:'root'})
export class weatherService implements OnInit{
constructor(private httpClient:HttpClient){}
// cityName="/new delhi"

// getCityName(){
//    return this.cityName;
// }
ngOnInit(): void {
   // console.log(this.newUrl)
}
// newUrl=environment.weatherApiBaseUrl+this.cityName;

getWeatherData(cityName:string){
   console.log(cityName)
 return this.httpClient.get<weatherData>(environment.weatherApiBaseUrl+'/'+cityName + '/EN',{
    headers:new HttpHeaders()
    .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
    .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue)
   
})

}
}