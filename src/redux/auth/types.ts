import { ApiCredentialsErrors } from 'api/types';

export type AuthState = {
    isAuth: boolean, 
    errors: ApiCredentialsErrors | null,
    isLoading: boolean
}