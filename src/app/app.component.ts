import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMICalc'; 
  feet: number = null;
  inch: number = null;
  weight: number = null;
  metricSwitch: boolean = false;
  meter: number = null;
  kilogram: number = null;
  
  calc(){
    if(this.metricSwitch){
    let meter = ((this.feet * 12)+this.inch) * 0.0254;
    let kilogram = this.weight * 0.45359237;
    }else{
      let meter = this.meter;
      let kilogram = this.kilogram;
    }
    return Math.round(((this.kilogram/(Math.pow(this.meter,2)))*100));
  }
  switchDisplay(){
    this.metricSwitch = !this.metricSwitch;
  }
}
