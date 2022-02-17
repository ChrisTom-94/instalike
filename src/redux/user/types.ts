export type UserState = {
  data: Instalike.User;
  followSuggestions: Instalike.UserPreview[];
  following: Instalike.UserPreview[];
  notifications: Instalike.Notification[];
  error: string | null;
};

export type UserRequiredFields = Pick<
  Instalike.User,
  "firstName" | "lastName" | "userName" | "email" | "id"
>;

export type UserUpdatePayload = Omit<
  Partial<Instalike.User>,
  keyof UserRequiredFields
> & UserRequiredFields;
