import apiClient from "redux/api/api";
import { LoadingStatus } from "./enum";

export type ApiInstance = typeof apiClient;

export type ApiState = {
  isAuth: boolean;
  isLoading: LoadingStatus | false;
  errors: ApiErrors | null;
};

export type ApiUserErrors = {
  email?: string;
  firstName?: string;
  lastName?: string;
  biography?: string;
  userName?: string;
  password?: string;
};

export type ApiErrors = {
  message?: string;
  errors?: ApiUserErrors;
};
export type ApiCredentials = { email: string; password: string };
export type ApiResourceID = number | string;
