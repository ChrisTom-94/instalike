export type UserState = {
  user: Instalike.User;
  followSuggestions: Instalike.UserPreview[];
  following: Instalike.UserPreview[];
  notifications: Instalike.Notification[];
  posts: Instalike.PostFeed;
};

export type UserRequiredFields = Pick<
  Instalike.User,
  "firstName" | "lastName" | "userName" | "email" | "id"
>;

export type UserUpdatePayload = Omit<
  Partial<Instalike.User>,
  keyof UserRequiredFields
> &
  UserRequiredFields;
