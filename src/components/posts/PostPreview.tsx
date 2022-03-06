import UserPreview from "components/user/UserPreview";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Heart } from "assets/images/heart.svg";
import { ReactComponent as HeartFilled } from "assets/images/heart-filled.svg";
import { ReactComponent as Comments } from "assets/images/comments.svg";
import { useDispatch, useSelector } from "react-redux";
import { userProfileIDSelector } from "redux/user/selectors";
import { likeAsync, unlikeAsync } from "redux/posts/thunks";
import { Link } from "react-router-dom";
import { dateDiff } from "utils/helpers";
import PostsSlider from "./PostSlider";

const PostPreview = ({
  post,
  isLast,
  onAppears,
}: {
  post: Instalike.Post;
  isLast: boolean;
  onAppears: () => void;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.7 });
  const isVisible = entry?.isIntersecting;
  const userId = useSelector(userProfileIDSelector);
  const dispatch = useDispatch();

  const toggleLike = () => {
    if (post.viewerHasLiked) {
      const like = post.previewLikes.find((l) => l.owner.id === userId);
      if (like) dispatch(unlikeAsync(like.owner.id, post.id));
    } else dispatch(likeAsync(post.id));
  };

  useEffect(() => {
    if (!isLast || !isVisible) return;
    onAppears();
  }, [isLast, isVisible, onAppears]);

  return (
    <div ref={ref} className="bg-white py-2 border-b-4 border-b-duke-blue">
      <header className="p-2 border-b-4 border-b-acquamarine-light">
        <UserPreview
          avatar={post.owner.avatar}
          userName={post.owner.userName}
        />
      </header>

      <PostsSlider resources={post.resources} />

      <div className="flex items-center gap-4 px-3">
        <button type="button" className="w-6" onClick={toggleLike}>
          {post.viewerHasLiked ? (
            <HeartFilled width="30px" />
          ) : (
            <Heart width="30px" />
          )}
        </button>
        <Link to={`/post/${post.id}#comments`}>
          <Comments />
        </Link>
      </div>

      <div className="px-3 text-sm">
        <p>
          <span className="font-bold text-paradise-pink">
            {post.likesCount}
          </span>{" "}
          likes
        </p>
        <p>
          <span className="font-bold text-paradise-pink">
            {post.commentsCount}
          </span>{" "}
          comments
        </p>
      </div>

      <div className="px-3 mt-3">
        <p><small>{post.location}</small></p>
        <p>
          <Link className="font-medium" to={`/user/${post.owner.id}`}>
            {post.owner.fullName}
          </Link>
        </p>
        <p>{post.caption}</p>
      </div>

      <div className="px-3 mt-3 text-sm text-gray-500">
        <small>
          <Link to={`/post/${post.id}#comments`}>View all comments</Link>
        </small>
        <p>
          <small>{dateDiff(post.createdAt)} ago</small>
        </p>
      </div>
    </div>
  );
};

export default PostPreview;
