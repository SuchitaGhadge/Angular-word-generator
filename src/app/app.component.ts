import { Component } from '@angular/core';
import arrayWords from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  limit = 10;

  handleSliderChange(newLimit: any){
    console.log(newLimit.target.value)
    this.limit = newLimit.target.value
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(" ")
  }
}
