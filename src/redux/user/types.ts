export type UserState = {
  profile: Instalike.User;
  followSuggestions: Instalike.User[];
  following: Instalike.User[];
  followers: Instalike.User[];
  notifications: Instalike.Notification[];
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

export type UserPreviewType = Pick<
  Instalike.UserPreview,
  "userName" | "avatar"
> & { email?: string };
