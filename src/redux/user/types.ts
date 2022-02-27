import { UserErrorStatus, UserLoadingStatus } from './enum';

export type UserState = {
  data: Instalike.User;
  followSuggestions: Instalike.UserPreview[];
  following: Instalike.UserPreview[];
  notifications: Instalike.Notification[];
  errors: {message: string, type: UserErrorStatus} | null;
  isLoading: false | UserLoadingStatus;
};

export type UserRequiredFields = Pick<
  Instalike.User,
  "firstName" | "lastName" | "userName" | "email" | "id"
>;

export type UserUpdatePayload = Omit<
  Partial<Instalike.User>,
  keyof UserRequiredFields
> & UserRequiredFields;
