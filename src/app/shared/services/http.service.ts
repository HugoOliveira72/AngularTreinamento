import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { personModel } from '../pages/master-page/person-model';
import { WeatherModel } from '../pages/master-page/weather-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  // public getWeathers(): Observable<Array<WeatherModel>> {
  //   return this.httpClient.get<Array<WeatherModel>>(environment.url + '/WeatherForecast');
  // }

  // public getPerson(id : number): Observable<personModel> {
  //   return this.httpClient.get<personModel>(environment.url + '/Person/' + id);
  // }


}
