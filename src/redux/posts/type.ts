export type PostWithRequired = {
  caption: string;
  resources: Instalike.Media[];
  location: string;
};

export type PostsState = {
  feed: Instalike.PostFeed;
  posts: Instalike.PostFeed;
  viewedUserPosts: Instalike.PostFeed;
};
