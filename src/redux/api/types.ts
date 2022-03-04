import apiClient from "redux/api/api";
import { LoadingStatus } from "./enum";

export type ApiInstance = typeof apiClient;

export type ApiState = {
  isAuth: boolean;
  isLoading: LoadingStatus | false;
  errors: ApiErrors | null;
};

export type ApiLoginErrors = { email: string; password: string };

export type ApiErrors = { message?: string; errors?: ApiLoginErrors };
export type ApiCredentials = { email: string; password: string };
export type ApiResourceID = number | string;
