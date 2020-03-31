import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  goals:Quote[] = [
    new Quote(1, 'life is what happens when you are busy making other plans written by Diana from Linklon', 'written by Diana from linclon',new Date(2020,3,31)),
    new Quote(2,'you know you are inlove when you cant fall asleep because reality is finally better than your dreams written by Dr sue Germany','I Dr Sue of Germany',new Date(2020,3,31)),
    new Quote(3,'Get busy living or Get busy Dying written by Mark Calne','written by Mark Clane',new Date(2022,1,12)),
    new Quote(4,'twenty years from now you will be more disappointed by the things that you didnt do than by the one you did written by Mark Twain','written by Mark Twain',new Date(2020,3,31)),
    new Quote(5,'great minds discuss ideas,avarage mind dicsuss events and small minds discuss people by Eleanor Roosevelt','written by Eleanor Roosevelt',new Date(2020,3,31)),
    new Quote(6,'God is the way,the truth and the life and the life whoever believes in Him shall inherit the kingdom of heaven believed by Kennedy mbithi','believed by Kennedy Mbithi',new Date(2020,3,31)),
   
   
  ];
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  



  constructor() { }

  ngOnInit(): void {
  }

}
