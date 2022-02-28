import { ApiCredentials, ApiResourceId } from 'api/types';
import { UserUpdatePayload } from 'redux/user/types';
import axios from "axios";

export const API_TOKEN = "API_TOKEN";

const apiClient = {
  api: axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  auth: {
    login: (credentials: ApiCredentials) => apiClient.api.post<Instalike.AuthJWT>("/auth/login", credentials),

    logout: () => apiClient.api.post<{}>("/auth/logout"),

    refreshToken: () => apiClient.api.post<Instalike.AuthJWT>("/auth/refresh"),
  },

  user: {

    fetchById: (id: ApiResourceId) => apiClient.api.get<Instalike.User>(`/users/${id}`),

    fetchAll: () => apiClient.api.get<Instalike.User[]>("/users/"),

    profile: ()=> apiClient.api.get<Instalike.User>("/users/me"),

    updateProfile: (user: UserUpdatePayload) => apiClient.api.put<Instalike.User>("/users/me", user),

    updateAvatar: (resource: File) => apiClient.api.post<Instalike.User>("/users/me/avatar", { resource }),

    deleteAvatar: () =>apiClient.api.delete<Instalike.User>("/users/me/avatar"),

    updatePassword: () => apiClient.api.put<{}>("/users/me/password"),

    followSuggestions: (amount: number) => apiClient.api.get<Instalike.User[]>("/users/me/follow-suggestions", { params: { amount } }),

    followers: () => apiClient.api.get<Instalike.User[]>("/users/me/followers"),

    following: () => apiClient.api.get<Instalike.User[]>("/users/me/following"),

    follow: (id: ApiResourceId) => apiClient.api.post<Instalike.User>(`/users/me/followers/${id}/follow`),

    unfollow: (id: ApiResourceId) => apiClient.api.delete<Instalike.User>(`/users/me/followers/${id}/follow`),

    notifications: () => apiClient.api.get<Instalike.Notification[]>("/users/me/notifications"),

    readNotification: (id: ApiResourceId)=> apiClient.api.post<Instalike.Notification>(`/users/me/notifications/${id}/read`),

    unreadNotification: (id: ApiResourceId) => apiClient.api.delete<Instalike.Notification>(`/users/me/notifications/${id}/read`),
  },

  posts: {
    userFeed: (amount: ApiResourceId) => apiClient.api.get("/users/me/feed", { params: { amount } }),

    userPosts: (amount: ApiResourceId) => apiClient.api.get("/users/me/posts", { params: { amount } }),

    create: (post: Instalike.Post) => apiClient.api.post("/posts", post),

    update: (id: ApiResourceId, data: Instalike.Post) => apiClient.api.put(`/posts/${id}`, data),

    delete: (id: ApiResourceId) => apiClient.api.put(`/posts/${id}`),

    like: (id: ApiResourceId) => apiClient.api.post(`/posts/${id}/like`),

    unlike: (id: ApiResourceId) => apiClient.api.delete(`/posts/${id}/like`),

    comments: (id: ApiResourceId) => apiClient.api.get(`/posts/${id}/comments`),

    getComment: (idPost: ApiResourceId, idComment: ApiResourceId) => apiClient.api.get(`/posts/${idPost}/comments/${idComment}`),

    updateComment: (idPost: ApiResourceId, idComment: ApiResourceId, text: string) => apiClient.api.put(`/posts/${idPost}/comments/${idComment}`, { text }),

    removeComment: (idPost: ApiResourceId, idComment: ApiResourceId) => apiClient.api.delete(`/posts/${idPost}/comments/${idComment}`),
  },
};

apiClient.api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem(API_TOKEN);
  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        "Authorization": `Bearer ${token}`,
      },
    };
  }
  return config;
});



export default apiClient;
