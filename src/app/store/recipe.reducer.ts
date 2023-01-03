import {Action, createReducer, on} from '@ngrx/store';
import * as RecipeActions from './recipe.actions';
import { IUserState, initializeState } from './recipe.state';

const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(RecipeActions.setUserInfoAction, (state: IUserState, {userInfo}) => {
        return {...state, userInfo: userInfo}
    }),
    on(RecipeActions.getUserInfoAction, (state: IUserState, {userInfo}) => {
        return {...state, userInfo: userInfo}
    })
)

export function recipeReducer(state: IUserState | undefined, action: Action) {
    return reducer(state, action)
}