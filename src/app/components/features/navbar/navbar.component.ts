import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IUserState } from 'src/app/store/recipe.state';
import * as RecipeSelectors from 'src/app/store/recipe.selectors'
import { setUserInfoAction } from 'src/app/store/recipe.actions';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router, private store: Store<IUserState>) {

  }

  ngOnInit(): void {
    
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

  signOut() {
    window.sessionStorage.clear();
    this.store.dispatch(setUserInfoAction({userInfo: new User()}));
    this.rerouteToLogin();
  }

}
