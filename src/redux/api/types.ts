import apiClient from "redux/api/api";
import { LoadingStatus } from "./enum";

export type ApiInstance = typeof apiClient;

export type ApiState = {
  isAuth: boolean;
  isLoading: LoadingStatus | false;
  errors: ApiErrors | null;
};

export type ApiErrorsKeys = {
  email?: string;
  firstName?: string;
  lastName?: string;
  biography?: string;
  userName?: string;
  password?: string;
  resources?: string;
  caption?: string;
  location?: string;
  text?: string;
};

export type ApiErrors = {
  message?: string;
  errors?: ApiErrorsKeys;
};
export type ApiCredentials = { email: string; password: string };
export type ApiResourceID = number | string;
