import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { personModel } from './person-model';
import { WeatherModel } from './weather-model';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  // public resultados: Array<WeatherModel> = new Array<WeatherModel>();
  public result: personModel = new personModel();

  constructor(private httpClient: HttpService) { 
  }
  
  // ngOnInit(): void {
  //   this.httpClient.getWeathers().subscribe(result => {
  //     this.resultados = result
  //   });
  // }

  // ngOnInit(): void {
  //   this.httpClient.getPerson(2197).subscribe(result => {
  //     this.result = result;
  //   });
  // }

  ngOnInit(): void {
    
  }
}
