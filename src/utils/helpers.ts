import { API_TOKEN } from 'api/api';

export const saveToken = (token: Instalike.AuthJWT) => sessionStorage.setItem(API_TOKEN, token.accessToken) 
export const deleteToken = () => sessionStorage.removeItem(API_TOKEN)
export const checkIfTokenExist = () => sessionStorage.getItem(API_TOKEN) !== null
