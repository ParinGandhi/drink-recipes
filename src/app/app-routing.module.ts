import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/features/login/login.component';
import { RecipesComponent } from './components/features/recipes/recipes.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
},
{
  path: 'recipes',
  component: RecipesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
