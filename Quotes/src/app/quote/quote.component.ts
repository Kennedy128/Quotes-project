import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  goals:Quote[] = [
    {id:1, name:'life is what happens when you are busy making other plans',description:'written by Diana from Linklon'},
    {id:2,name:'you know you are in love when you cant fall sleep becaise reality is finally better than your dreams',description:'written by Dr sue Germany'},
    {id:3,name:'Get busy living or get busy dying',description:'written by Mark Caine'},
    {id:4,name:'twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did',description:'written by Mark Twain'},
    {id:5,name:'great minds discuss ideas,avarage mind discuss events and small minds discuss people',description:'written by Eleanor Roosevelt'},
    {id:6,name:'God is the way,the Truth and the life and whoever believes in him shall inherit the kingdom of heaven',description:'believed by Kennedy Mbithi'},
  
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
