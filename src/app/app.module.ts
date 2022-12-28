import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/features/navbar/navbar.component';
import { LoginComponent } from './components/features/login/login.component';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { RecipesComponent } from './components/features/recipes/recipes.component';
import { RecipeComponent } from './components/features/recipes/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
