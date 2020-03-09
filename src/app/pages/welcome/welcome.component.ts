import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  leavePage = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.leavePage = false;
  }
  buttonFunction(){
    console.log("Hello world");
    this.leavePage = true;
    setTimeout(() => { 
      this.router.navigate(['/instructions']);
    }, 1200);
  }
}
