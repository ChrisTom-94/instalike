import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";

export type ApiCredentials = { email: string; password: string };
export type ApiCredentialsErrors = Partial<ApiCredentials> & {message?: string}
export type ApiResourceId = number | string;
export type ApiActionEndpoint<T> = () => Promise<AxiosResponse<T, any>>

export type ApiActionPayload = {
  apiEndpoint: any,
  data: {} | null,
  onSuccess: (() => AnyAction) | ((data: any) => AnyAction),
  onFailure: (() => AnyAction) | ((error: any) => AnyAction),
  label: string
}

export interface ApiAction extends AnyAction {
    type: string,
    payload: ApiActionPayload
}
