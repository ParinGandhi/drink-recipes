import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from './recipe.state';

const userData = createFeatureSelector<IUserState>('userState');


export const getUserInfoState = createSelector(
    userData,
    (s) => s
)
