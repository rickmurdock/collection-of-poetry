import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { PoemService } from '../shared/poem.service';
import { TitledPoem } from '../shared/titled-poem.model';

AOS.init();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  poem1: TitledPoem;
  poem2: TitledPoem;
  poem3: TitledPoem;
  poem4: TitledPoem;
  poem5: TitledPoem;
  poem6: TitledPoem;

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
    this.poem1 = this.getPoem('The High Cost of Living');
    this.poem2 = this.getPoem('One True Friend');
    this.poem3 = this.getPoem('It\'s Not What You Have');
    this.poem4 = this.getPoem('The Still Small Voice of God');
    this.poem5 = this.getPoem('He Is No Friend of Mine');
    this.poem6 = this.getPoem('I Shall Not Live in Vain');
  }

  getPoem(title: string): TitledPoem {
    let x: any;
    this.poemService.getPublishedPoem(title)
      .subscribe(poem => x = poem);
      return(x);
  }
}
