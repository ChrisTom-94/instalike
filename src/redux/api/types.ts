import apiClient  from 'redux/api/api';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

export type ApiInstance = typeof apiClient

export type ApiState = {
    isAuth: boolean, 
    isLoading: boolean,
}

export type ApiError = {
    message: string,
    errors: object
}

export type ApiCredentials = { email: string; password: string };
export type ApiCredentialsErrors = Partial<ApiCredentials> & {message?: string | null}
export type ResourceID = number | string;
export type ApiActionEndpoint<T> = () => Promise<AxiosResponse<T, any>>

export type ApiActionPayload = {
  apiEndpoint: any,
  data: {} | null,
  label: string
}

export interface ApiAction extends AnyAction {
    type: string,
    payload: ApiActionPayload
}