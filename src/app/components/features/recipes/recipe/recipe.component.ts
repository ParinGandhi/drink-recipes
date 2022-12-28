import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  @Input() recipe: Recipe | undefined;

}
