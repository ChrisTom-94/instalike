import UserPreview from "components/user/UserPreview";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Heart } from "assets/images/heart.svg";
import { ReactComponent as HeartFilled } from "assets/images/heart-filled.svg";
import { ReactComponent as Comments } from "assets/images/comments.svg";
import { useDispatch, useSelector } from "react-redux";
import { userProfileIDSelector } from "redux/user/selectors";
import { deletePostAsync, likeAsync, unlikeAsync } from "redux/posts/thunks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { dateDiff } from "utils/helpers";
import useToggler from "hooks/useToggler";
import ButtonOutlined from "components/buttons/ButtonOutlined";
import PostsSlider from "./PostSlider";

const PostPreview = ({
  post,
  isLast,
  onAppears,
}: {
  post: Instalike.Post;
  isLast?: boolean;
  onAppears?: () => void;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.7 });
  const isVisible = entry?.isIntersecting;
  const userId = useSelector(userProfileIDSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLiked, toggleLike] = useToggler(post.viewerHasLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);

  const onClick = () => {
    if (isLiked) {
      const like = post.previewLikes.find((l) => l.owner.id === userId);
      if (like) {
        dispatch(unlikeAsync(post.id, like.owner.id));
        toggleLike(false);
        setLikesCount((count) => count - 1);
      }
    } else {
      dispatch(likeAsync(post.id));
      toggleLike(true);
      setLikesCount((count) => count + 1);
    }
  };

  const onWantDelete = () => {
    if (window.confirm("Do you really want delete the post ?")) {
      dispatch(deletePostAsync(post.id));
      if (location.pathname.match(/\/post\/\d/)) navigate("/feed");
    }
  };

  useEffect(() => {
    if (!isLast || !isVisible) return;
    if (onAppears) onAppears();
  }, [isLast, isVisible, onAppears]);

  return (
    <div ref={ref} className="bg-white py-2 border-b-4 border-b-duke-blue">
      <header className="p-2 border-b-4 border-b-acquamarine-light flex justify-between items-center">
        <UserPreview
          id={post.owner.id}
          avatar={post.owner.avatar}
          userName={post.owner.userName}
        />
        {post.owner.id === userId && (
          <ButtonOutlined disabled={false} type="button" onClick={onWantDelete}>
            <span className="text-gradient group-hover:reset-text-gradient group-hover:text-white">
              Delete
            </span>
          </ButtonOutlined>
        )}
      </header>

      <PostsSlider resources={post.resources} />

      <div className="flex items-center gap-4 px-3">
        <button type="button" className="w-6" onClick={onClick}>
          {isLiked ? <HeartFilled width="30px" /> : <Heart width="30px" />}
        </button>
        <Link to={`/post/${post.id}#comments`}>
          <Comments />
        </Link>
      </div>

      <div className="px-3 text-sm">
        <p>
          <span className="font-bold text-paradise-pink">{likesCount}</span>{" "}
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
        <p>
          <small>{post.location}</small>
        </p>
        <p>
          <Link className="font-medium" to={`/user/${post.owner.id}`}>
            {post.owner.fullName}
          </Link>
        </p>
        <p>{post.caption}</p>
      </div>

      <div className="px-3 mt-3 text-sm text-gray-500">
        <small>
          <Link to={`/post/${post.id}#comments`} state={post}>
            View all comments
          </Link>
        </small>
        <p>
          <small>{dateDiff(post.createdAt)} ago</small>
        </p>
      </div>
    </div>
  );
};

PostPreview.defaultProps = {
  onAppears: undefined,
  isLast: false,
};

export default PostPreview;
