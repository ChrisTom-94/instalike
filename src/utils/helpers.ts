import { API_TOKEN } from "redux/api/api";

export const getToken = () => localStorage.getItem(API_TOKEN);
export const saveToken = (token: Instalike.AuthJWT) =>
  localStorage.setItem(API_TOKEN, token.accessToken);
export const deleteToken = () => localStorage.removeItem(API_TOKEN);
export const tokenExist = () => localStorage.getItem(API_TOKEN) !== null;

export const dateDiff = (date: string) => {
  const diff = Math.abs(new Date().getTime() - new Date(date).getTime());
  const days = new Date(diff).getUTCDate() - 1;
  if (days > 0) return `${days} day${days === 1 ? "" : "s"}`;
  const hours = Math.round(diff / 3.6e6);
  if (hours > 0) return `${hours} hour${hours === 1 ? "" : "s"}`;
  const minutes = Math.round(diff / 60000);
  if(minutes > 0) return `${minutes} minutes${minutes === 1 ? "" : "s"}`;
  return "Less than 1 minutes";
 
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
