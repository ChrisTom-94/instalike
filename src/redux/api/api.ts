import { getToken } from "utils/helpers";
import { UserUpdatePayload } from "redux/user/types";
import axios from "axios";
import { ApiCredentials, ApiResourceID } from "./types";

export const API_TOKEN = "API_TOKEN";

const apiClient = {
  api: axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  auth: {
    login: (credentials: ApiCredentials) =>
      apiClient.api.post<Instalike.AuthJWT>("/auth/login", credentials),

    logout: () => apiClient.api.post<{}>("/auth/logout"),
  },

  user: {
    fetchById: (id: ApiResourceID) =>
      apiClient.api.get<Instalike.User>(`/users/${id}`),

    fetchAll: () => apiClient.api.get<Instalike.User[]>("/users/"),

    profile: () => apiClient.api.get<Instalike.User>("/users/me"),

    updateProfile: (user: UserUpdatePayload) =>
      apiClient.api.put<Instalike.User>("/users/me", user),

    updateAvatar: (avatarForm: FormData) =>
      apiClient.api.post<Instalike.User>("/users/me/avatar", avatarForm),

    deleteAvatar: () =>
      apiClient.api.delete<Instalike.User>("/users/me/avatar"),

    updatePassword: () => apiClient.api.put<{}>("/users/me/password"),

    posts: (amount: number, cursor: string) =>
      apiClient.api.get("/users/me/posts", { params: { amount, cursor } }),

    followSuggestions: (amount: number) =>
      apiClient.api.get<Instalike.User[]>("/users/me/follow-suggestions", {
        params: { amount },
      }),

    followers: () => apiClient.api.get<Instalike.User[]>("/users/me/followers"),

    following: () => apiClient.api.get<Instalike.User[]>("/users/me/following"),

    follow: (id: ApiResourceID) =>
      apiClient.api.post<Instalike.User>(`/users/me/followers/${id}/follow`),

    unfollow: (id: ApiResourceID) =>
      apiClient.api.delete<Instalike.User>(`/users/me/followers/${id}/follow`),

    notifications: () =>
      apiClient.api.get<Instalike.Notification[]>("/users/me/notifications"),

    readNotification: (id: ApiResourceID) =>
      apiClient.api.post<Instalike.Notification>(
        `/users/me/notifications/${id}/read`
      ),

    unreadNotification: (id: ApiResourceID) =>
      apiClient.api.delete<Instalike.Notification>(
        `/users/me/notifications/${id}/read`
      ),
  },

  posts: {
    feed: (amount: number, cursor: string) =>
      apiClient.api.get("/posts", { params: { amount, cursor } }),

    create: (post: Instalike.Post) => apiClient.api.post("/posts", post),

    update: (id: ApiResourceID, data: Instalike.Post) =>
      apiClient.api.put(`/posts/${id}`, data),

    delete: (id: ApiResourceID) => apiClient.api.put(`/posts/${id}`),

    like: (id: ApiResourceID) => apiClient.api.post(`/posts/${id}/like`),

    unlike: (id: ApiResourceID) => apiClient.api.delete(`/posts/${id}/like`),

    comments: (id: ApiResourceID) => apiClient.api.get(`/posts/${id}/comments`),

    getComment: (idPost: ApiResourceID, idComment: ApiResourceID) =>
      apiClient.api.get(`/posts/${idPost}/comments/${idComment}`),

    updateComment: (
      idPost: ApiResourceID,
      idComment: ApiResourceID,
      text: string
    ) => apiClient.api.put(`/posts/${idPost}/comments/${idComment}`, { text }),

    removeComment: (idPost: ApiResourceID, idComment: ApiResourceID) =>
      apiClient.api.delete(`/posts/${idPost}/comments/${idComment}`),
  },
};

apiClient.api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return config;
});

export default apiClient;
