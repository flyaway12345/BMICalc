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
  
  calc(){
    let meter = ((this.feet * 12)+this.inch) * 0.0254;
    let kilogram = this.weight * 0.45359237;
    return Math.round(((kilogram/(Math.pow(meter,2)))*100));
  }

}
