export type UserState = {
  profile: Instalike.User;
  followSuggestions: Instalike.User[];
  following: Instalike.User[];
  followers: Instalike.User[];
  notifications: Instalike.Notification[];
  viewedUser: {
    profile: Instalike.User;
    following: Instalike.User[];
    followers: Instalike.User[];
  };
};

export type UserRequiredFields = Pick<
  Instalike.User,
  "firstName" | "lastName" | "userName" | "email"
> & { biography?: string };

export type UserUpdatePayload = Omit<
  Partial<Instalike.User>,
  keyof UserRequiredFields
> &
  UserRequiredFields;

export type UserPreviewType = Pick<
  Instalike.UserPreview,
  "userName" | "avatar" | "id"
> & { email?: string };
