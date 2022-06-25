import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng_TwinkleDelights';

  constructor(private router: Router) {

  }

  isCategories(path: string): boolean {
    return this.router.url == path
  }

  isEarrings(path: string): boolean {
    return this.router.url.includes(path)
  }

  isNecklaces(path: string): boolean {
    return this.router.url.includes(path)
  }

  isRings(path: string): boolean {
    return this.router.url.includes(path)
  }

  isBracelets(path: string): boolean {
    return this.router.url.includes(path)
  }
}
