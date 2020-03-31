import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:Quote[] = [
    {id:1, name:'one famous quote'},
    {id:2,name:'two famous quote'},
    {id:3,name:'three famous quote'},
    {id:4,name:'four famous quote'},
    {id:5,name:'five famous quote'},
    {id:6,name:'six famous quote'},
  ];
  
  
}
