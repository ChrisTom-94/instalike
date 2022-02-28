export type PostWithRequired = {
  caption: string;
  hasCommentsDisabled: boolean;
  location: string;
};

export type PostsState = {
  feed: Instalike.PostFeed,
  currentPosts: Instalike.PostFeed,
  currentPost: Instalike.Post | null,
  errors: string[] | string | null
  isLoading: boolean,
};
