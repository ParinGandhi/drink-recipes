import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) {

  }

  rerouteToLogin() {
    const offCanvasMenu = document.getElementById('offcanvasDarkNavbar');
    offCanvasMenu?.classList.remove('show');
    const offCanvasBackdrop = document.getElementsByClassName('offcanvas-backdrop');
    Array.from(offCanvasBackdrop).forEach((element) => {
      element.classList.remove('show');
    });
    this.router.navigate(['/login'])
  }  

}
