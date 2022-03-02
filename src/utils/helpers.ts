import { API_TOKEN } from 'redux/api/api';

export const getToken = () => localStorage.getItem(API_TOKEN)
export const saveToken = (token: Instalike.AuthJWT) => sessionStorage.setItem(API_TOKEN, token.accessToken) 
export const deleteToken = () => sessionStorage.removeItem(API_TOKEN)
export const tokenExist = () => sessionStorage.getItem(API_TOKEN) !== null

export const dateDiff = (date: string) => {
    const diff = Math.abs(new Date().getTime() - new Date(date).getTime());
    return new Date(diff).getUTCDate() - 1
}

export const extractNotificationType = (type: string) => type.split("user_has").pop()?.split("_").join(" ")

export const generateEmptyPostsFeed = (): Instalike.PostFeed => ({
    resourceType: "",
    items: [],
    count: 0,
    cursor: null,
    nextCursor: null,
    previousCursor: null,
    isEmpty: true,
    hasMorePages: false,
    hasPages: false,
    onFirstPage: false,
  })
