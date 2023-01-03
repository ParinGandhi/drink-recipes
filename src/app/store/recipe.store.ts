import { ActionReducerMap } from "@ngrx/store";

import { IUserState } from "./recipe.state";
import { recipeReducer } from "./recipe.reducer";

export interface State {
    recipeState: IUserState         
}

export const reducers: ActionReducerMap<State> = {
    recipeState: recipeReducer
}