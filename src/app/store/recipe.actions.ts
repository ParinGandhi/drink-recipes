import { createAction, props } from "@ngrx/store";
import { User } from "../models/User.model";

export const getUserInfoAction = createAction(
    'Get user information',
    props<{userInfo: User}>()
)

export const setUserInfoAction = createAction(
    'Set user information',
    props<{userInfo: User}>()
)