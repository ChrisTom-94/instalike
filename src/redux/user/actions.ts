import { GetProfileAction, UpdateProfileAction } from './actionsType';
import UserActions from "./enum";

export const getProfile = (user: Instalike.User): GetProfileAction => ({
    type: UserActions.GET_PROFILE,
    payload: user
})

export const updateProfile = (user: Instalike.User): UpdateProfileAction => ({
    type: UserActions.UPDATE_PROFILE,
    payload: user
})