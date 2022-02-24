import axios from "axios";
import { ApiClient } from "./types";

export const API_TOKEN = "API_TOKEN";

const apiClient: ApiClient = {
  api: axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  auth: {
    login: (credentials) => apiClient.api.post("/auth/login", credentials),

    logout: () => apiClient.api.post("/auth/logout"),

    refreshToken: () => apiClient.api.post("/auth/refresh"),
  },

  user: {

    fetchById: (id) => apiClient.api.get(`/users/${id}`),

    fetchAll: () => apiClient.api.get("/users/"),

    profile: () => apiClient.api.get("/users/me"),

    updateProfile: (user) => apiClient.api.put("/users/me", user),

    updateAvatar: (resource) => apiClient.api.post("/users/me/avatar", { resource }),

    deleteAvatar: () =>apiClient.api.delete("/users/me/avatar"),

    updatePassword: () => apiClient.api.put("/users/me/password"),

    followSuggestions: (amount) => apiClient.api.get("/users/me/follow-suggestions", { params: { amount } }),

    followers: () => apiClient.api.get("/users/me/followers"),

    following: () => apiClient.api.get("/users/me/following"),

    follow: (id) => apiClient.api.post(`/users/me/followers/${id}/follow`),

    unfollow: (id) => apiClient.api.delete(`/users/me/followers/${id}/follow`),

    notifications: () => apiClient.api.get("/users/me/notifications"),

    readNotification: (id)=> apiClient.api.post(`/users/me/notifications/${id}/read`),

    unreadNotification: (id) => apiClient.api.delete(`/users/me/notifications/${id}/read`),
  },

  posts: {
    userFeed: (amount) => apiClient.api.get("/users/me/feed", { params: { amount } }),

    userPosts: (amount) => apiClient.api.get("/users/me/posts", { params: { amount } }),

    create: (post) => apiClient.api.post("/posts", post),

    update: (id, data) => apiClient.api.put(`/posts/${id}`, data),

    delete: (id) => apiClient.api.put(`/posts/${id}`),

    like: (id) => apiClient.api.post(`/posts/${id}/like`),

    unlike: (id) => apiClient.api.delete(`/posts/${id}/like`),

    comments: (id) => apiClient.api.get(`/posts/${id}/comments`),

    getComment: (idPost, idComment) => apiClient.api.get(`/posts/${idPost}/comments/${idComment}`),

    updateComment: (idPost, idComment, text) => apiClient.api.put(`/posts/${idPost}/comments/${idComment}`, { text }),

    removeComment: (idPost, idComment) => apiClient.api.delete(`/posts/${idPost}/comments/${idComment}`),
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
