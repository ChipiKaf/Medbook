import { Router } from '@angular/router';
import { InstructionCards } from './../../models/card-model';
import { Component, OnInit } from '@angular/core';
import { faCoffee, faUserNurse, faBookMedical, faNewspaper } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  faCoffee = faUserNurse;
  indexValue = 0;
  neutral = {
    'slideInLeft' : false,
    'slideOutRight': false
  }
  comingIn = {
    'slideInLeft' : true,
    'slideOutRight': false
  };
  goingOut = {
    'slideInLeft' : false,
    'slideOutRight': true
  };
  cards: InstructionCards[] = [
    {
   id: 1,
   icon: faUserNurse,
    title: 'Network of doctors',
    descrition: 'Get connected to a network of doctors near you',
    classes : this.comingIn
    },
    {
      id: 2,
      icon: faBookMedical,
       title: 'Book appointments fast',
       descrition: 'No ques, just set the time and arrive',
      classes: this.neutral
      },
       {
        id: 3,
         title: 'Get medical informaion',
         icon: faNewspaper,
         descrition: 'Get informed about outbreaks and prevention',
         classes: this.neutral
         },
];
  constructor(private router: Router) { }

  ngOnInit() {
    this.indexValue = 0;
  }
  nextSlide() {
    this.cards[this.indexValue].classes = this.goingOut;
    setTimeout(() => {
      this.indexValue++;
      if(this.indexValue !== this.cards.length) {
        this.cards[this.indexValue].classes = this.comingIn;
      }

      if (this.indexValue > this.cards.length - 1)  {
        this.router.navigate(['/login']);
      }
    }, 1000);
  
  }
}
