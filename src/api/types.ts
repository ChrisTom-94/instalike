import { AnyAction } from 'redux';
import { AxiosInstance, AxiosResponse } from "axios";
import { PostWithRequired } from "../redux/posts/type";
import { UserRequiredFields } from "../redux/user/types";

export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";

export type ApiClient = {
  api: AxiosInstance;
  auth: ApiClientAuthEndpoints;
  user: ApiClientUserEndpoints;
  posts: ApiClientPostEndpoints;
};

export type ApiCredentials = { email: string; password: string };
export type ApiPromiseResponse<T> = Promise<AxiosResponse<T>>;
export type ResourceID = number | string;

export type ApiClientAuthEndpoints = {
  login: (credentials: ApiCredentials) => ApiPromiseResponse<Instalike.AuthJWT>;

  logout: () => ApiPromiseResponse<{}>;

  refreshToken: () => ApiPromiseResponse<Instalike.AuthJWT>;
}

export type ApiClientUserEndpoints = {

  fetchById: (id: ResourceID) => ApiPromiseResponse<Instalike.User>;

  fetchAll: () => ApiPromiseResponse<Instalike.User[]>;

  profile: () => ApiPromiseResponse<Instalike.User>;

  updateProfile: (user: UserRequiredFields) => ApiPromiseResponse<Instalike.User>;

  updateAvatar: (resource: Instalike.Resource) => ApiPromiseResponse<Instalike.User>;

  deleteAvatar: () => ApiPromiseResponse<Instalike.User>;

  updatePassword: () => ApiPromiseResponse<{}>;

  followSuggestions: (amount: ResourceID) => ApiPromiseResponse<Instalike.User[]>;

  followers: () => ApiPromiseResponse<Instalike.User[]>;

  following: () => ApiPromiseResponse<Instalike.User[]>;

  follow: (id: ResourceID) => ApiPromiseResponse<Instalike.User[]>;

  unfollow: (id: ResourceID) => ApiPromiseResponse<Instalike.User>;

  notifications: () => ApiPromiseResponse<Instalike.Notification[]>;

  readNotification: (id: ResourceID) => ApiPromiseResponse<Instalike.Notification>;

  unreadNotification: (id: ResourceID) => ApiPromiseResponse<Instalike.Notification>;
};

export type ApiClientPostEndpoints = {
  userFeed: (amount: ResourceID) => ApiPromiseResponse<Instalike.PostFeed>;

  userPosts: (amount: ResourceID) => ApiPromiseResponse<Instalike.PostFeed>;

  create: (post: Instalike.Post) => ApiPromiseResponse<Instalike.Post>;

  update: (id: ResourceID, data: PostWithRequired) => ApiPromiseResponse<Instalike.Post>;

  delete: (id: ResourceID) => ApiPromiseResponse<{}>;

  like: (id: ResourceID) => ApiPromiseResponse<{}>;

  unlike: (id: ResourceID) => ApiPromiseResponse<{}>;

  comments: (id: ResourceID) => ApiPromiseResponse<Instalike.Comment[]>;

  getComment: (idPost: ResourceID, idComment: ResourceID) => ApiPromiseResponse<Instalike.Comment>;

  updateComment: (idPost: ResourceID, idComment: ResourceID, text: string) => ApiPromiseResponse<Instalike.Comment>;

  removeComment: (idPost: ResourceID, idComment: ResourceID) => ApiPromiseResponse<{}>;
};

export type ApiClientEndpoint = keyof ApiClientPostEndpoints | keyof ApiClientUserEndpoints | keyof ApiClientAuthEndpoints

export type ApiActionPayload = {
  apiEndpoint: any,
  data: {} | null,
  onSuccess: (() => void) | ((data: any) => void) | null,
  onFailure: (() => void) | ((data: any) => void) | null,
  label: string,
}

export interface ApiAction extends AnyAction {
    type: string,
    payload: ApiActionPayload
}
