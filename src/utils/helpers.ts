import { AxiosError } from "axios";
import { API_TOKEN } from 'api/api';

export const shouldRefreshToken = (error: AxiosError): boolean => {
    try {
        return error.response?.status === 401
    } catch (e) {
        return false
    }
}

export const shouldIntercept = (error: AxiosError): boolean => {
    try {
        return error.response?.status === 403
    } catch (e) {
        return false
    }
}

export const saveToken = (token: Instalike.AuthJWT) => sessionStorage.setItem(API_TOKEN, token.accessToken) 

export const deleteToken = () => sessionStorage.removeItem(API_TOKEN)
