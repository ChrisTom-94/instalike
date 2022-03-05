export type PostWithRequired = {
  caption: string;
  hasCommentsDisabled: boolean;
  location: string;
};

export type PostsState = {
  feed: Instalike.PostFeed;
  posts: Instalike.PostFeed;
  viewedUserPosts: Instalike.PostFeed;
  currentPost: {
    post: Instalike.Post;
    comments: Instalike.Comment[];
    likes: Instalike.Like[];
  };
};
