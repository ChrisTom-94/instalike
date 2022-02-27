export type PostWithRequired = {
  caption: string;
  hasCommentsDisabled: boolean;
  location: string;
};

export type PostsState = {
  feed: Instalike.PostFeed,
  ownPosts: Instalike.PostFeed,
  userPosts: Instalike.PostFeed,
  post: Instalike.Post | null,
  errors: string[] | string | null
  isLoading: boolean,
};
