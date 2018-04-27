import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  address:string = '';
  longitude:string = '';
  latitude:string = '';
  constructor(private httpClient:HttpClient){}
  onKeyUp(event:any){
    this.address = event.target.value
  }
  getCoordinates(){
    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}key=AIzaSyCtcfyY33kDeveLH1QyToCneZGabjFNhfw')
    .subscribe(
      (data:any []) => {
        console.log(data)
      }
    )
  }
}

//api key AIzaSyCtcfyY33kDeveLH1QyToCneZGabjFNhfw
