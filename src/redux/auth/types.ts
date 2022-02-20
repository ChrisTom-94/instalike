import { ApiCredentialsErrors } from 'api/types';

export type AuthState = {
    isAuth: boolean, 
    authenticatedAt: string | null,
    errors: ApiCredentialsErrors | null
}