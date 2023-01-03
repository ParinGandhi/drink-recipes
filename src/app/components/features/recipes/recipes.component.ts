import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { IUser, User } from 'src/app/models/User.model';
import { IUserState } from 'src/app/store/recipe.state';
import { Store, select } from '@ngrx/store';
import * as RecipeSelectors from 'src/app/store/recipe.selectors'
import { setUserInfoAction } from 'src/app/store/recipe.actions';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: any = [];

  supaBase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );
  // [
  //   {
  //     title: "Old Fashion",
  //     description: 'A classic drink for anyone at any time',
  //     ingredients: [
  //       'Whiskey',
  //       'Angostura Bitters',
  //       'Ice'
  //     ],
  //     directions: 'Shake it, pour it, drink it',
  //     last_modified: 'Today'
  //   },
  //   {
  //     title: "Margherita",
  //     description: 'On the rocks with salt, of course',
  //     ingredients: [
  //       'Tequilla',
  //       'Triple Sec',
  //       'Ice',
  //       'Salt'
  //     ],
  //     directions: 'Shake it, pour it, drink it',
  //     last_modified: 'Yesterday'
  //   },
  //   {
  //     title: "Chocolate milk",
  //     description: 'Brown goodness',
  //     ingredients: [
  //       'Milk',
  //       'Chocolate',
  //       'Whip cream',
  //       'Marshmellows'
  //     ],
  //     directions: 'Put the syrup in the milk. Mix it. Generously apply whip cream. Top off with marshmellows',
  //     last_modified: 'Now'
  //   }
  // ]

  constructor(private store: Store<IUserState>) {}

  ngOnInit(): void {
    // let userInfo = window.sessionStorage.getItem("userInfo")
    // if (userInfo) {
    //   userInfo = JSON.parse(userInfo);
    //   this.getRecipes(userInfo);
    // }
    this.store.select(RecipeSelectors.getUserInfoState).subscribe((recipeState) => {
      let userInfo;
      if (recipeState) {
        userInfo = recipeState;
        this.getRecipes(userInfo);
      } else {
        userInfo = window.sessionStorage.getItem("userInfo")
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      this.store.dispatch(setUserInfoAction({userInfo: userInfo}));
      this.getRecipes(userInfo);
    }
      }
    })
  }

  getRecipes = async (userInfo: any) => {
    const { data, error } = await this.supaBase
    .from('recipes')
    .select('*')
    .eq('fk_registered_user_id', userInfo.id);
  console.log(data);
  this.recipes = data;
  }

}
