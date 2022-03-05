import { API_TOKEN } from "redux/api/api";

export const getToken = () => localStorage.getItem(API_TOKEN);
export const saveToken = (token: Instalike.AuthJWT) =>
  localStorage.setItem(API_TOKEN, token.accessToken);
export const deleteToken = () => localStorage.removeItem(API_TOKEN);
export const tokenExist = () => localStorage.getItem(API_TOKEN) !== null;

export const dateDiff = (date: string) => {
  const diff = Math.abs(new Date().getTime() - new Date(date).getTime());
  return new Date(diff).getUTCDate() - 1;
};

export const extractNotificationType = (type: string) =>
  type.split("user_has").pop()?.split("_").join(" ") ?? "";

export const localStoregeUsersConnected = (user: Instalike.User) => {
  const { userName, email, avatar } = user;
  localStorage.setItem(`user`, JSON.stringify({ userName, email, avatar }));
};

export const getLocalStoregeUserConnected = () =>
  JSON.parse(localStorage.getItem("user") ?? "null");

export const generateEmptyPostsFeed = (): Instalike.PostFeed => ({
  resourceType: "",
  items: [],
  count: 0,
  cursor: null,
  nextCursor: null,
  previousCursor: null,
  isEmpty: true,
  hasMorePages: false,
  hasPages: false,
  onFirstPage: false,
});

export const generateEmptyPost = (): Instalike.Post => ({
  resourceType: "Post",
  id: 0,
  caption: "",
  location: "",
  dimensions: {
    width: 0,
    height: 0,
  },
  resources: [],
  hasCommentsDisabled: false,
  likesCount: 0,
  previewLikes: [],
  commentsCount: 0,
  previewComments: [],
  viewerHasLiked: false,
  owner: {} as Instalike.User,
  createdAt: "",
  updatedAt: "",
});
