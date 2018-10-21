import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {

      if (window.pageYOffset >= 80) {
        console.log('SCROLLING ------------');
        // $("#nav-title").addClass("color");
      } else {
        console.log('NO')
      }
    }

  ngOnInit() {
  }

}
