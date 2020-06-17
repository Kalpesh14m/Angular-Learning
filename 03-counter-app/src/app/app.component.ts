import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  count: number = 0;

  handleIncrease = () =>{
    if(this.count < 10){
      this.count++;
    }
  };

  handleDecrease = () =>{
    if(this.count>0){
      this.count-- ;
    }
  };

  handleReset = () =>{
    this.count = 0;
  };
}
