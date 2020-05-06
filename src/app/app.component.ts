import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMICalc'; 
  answer: any;
  feet: number;
  inch: number;
  weight: number;
  metricSwitch: boolean = false;
  meter: number;
  kilogram: number;
  
  calc(){
    let meter;
    let kilogram;
    
    if(!this.metricSwitch){
    meter = ((this.feet * 12 +this.inch))
    kilogram = this.weight;
    console.log(meter + " " + kilogram);
    this.answer = (Math.round((kilogram/(Math.pow(meter,2))*703) * 100))/100;
    }else{
      
      
      this.answer = (Math.round((this.kilogram/(Math.pow(this.meter/100,2))) * 100))/100;     
    }
    
  }
  
  switchDisplay(){
    this.metricSwitch = !this.metricSwitch;
    this.answer = '';
    console.log(`switch to ${this.metricSwitch}`)

  }
}
