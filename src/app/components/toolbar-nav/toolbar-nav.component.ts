import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class ToolbarNavComponent implements OnInit {

  constructor(
  ) { }
  isMainNavActive: boolean = false;
  isTopNavVisible: boolean = true;
  hamburgerMenuColor:string = '#000';
  refCollection = ['home','about', 'services', 'gallery', 'contect']
  navCollection = [];
  ngOnInit() {

  }

  toggleMainNav() {
    this.isMainNavActive = !this.isMainNavActive;

    if (this.isMainNavActive) {
      this.refCollection.forEach((item => {
        this.navCollection.push(item);
      }))
    } else {
      this.navCollection = [];
    }
  }

  navigateTo(value) {
    this.isMainNavActive = false;
    this.navCollection = [];
  }

  setColorByType(type) {
    switch (type) {
      case 'about':
        this.hamburgerMenuColor = '#000';
        this.isTopNavVisible = false;
        break;
      case 'home':
        this.hamburgerMenuColor = '#fff';
        this.isTopNavVisible = true;
    }
  }
}
