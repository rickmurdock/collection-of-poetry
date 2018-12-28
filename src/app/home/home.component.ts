import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { PoemService } from '../shared/poem.service';

AOS.init();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  poem1: object;
  poem2: object;
  poem3: object;
  poem4: object;
  poem5: object;
  poem6: object;

  constructor(private poemService: PoemService) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      if (window.pageYOffset >= 80) {
        console.log('SCROLLING ------------');
        // $("#nav-title").addClass("color");
      } else {
        console.log('NO');
      }
    }

  ngOnInit() {
    this.getPoem1('The High Cost of Living');
    this.getPoem2('One True Friend');
    this.getPoem3('It\'s Not What You Have');
    this.getPoem4('The Still Small Voice of God');
    this.getPoem5('He Is No Friend of Mine');
    this.getPoem6('I Shall Not Live in Vain');
  }

  getPoem1(title: string): void {
    this.poemService.getPublishedPoem(title)
      .subscribe(poem => this.poem1 = poem);
  }

  getPoem2(title: string): void {
    this.poemService.getPublishedPoem(title)
      .subscribe(poem => this.poem2 = poem);
  }

  getPoem3(title: string): void {
    this.poemService.getPublishedPoem(title)
      .subscribe(poem => this.poem3 = poem);
  }

  getPoem4(title: string): void {
    this.poemService.getPublishedPoem(title)
      .subscribe(poem => this.poem4 = poem);
  }

  getPoem5(title: string): void {
    this.poemService.getPublishedPoem(title)
      .subscribe(poem => this.poem5 = poem);
  }

  getPoem6(title: string): void {
    this.poemService.getPublishedPoem(title)
      .subscribe(poem => this.poem6 = poem);
  }
}
