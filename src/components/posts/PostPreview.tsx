import useIntersectionObserver from "hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";

const PostPreview = ({
  post,
  isLast,
  onAppear,
}: {
  post: Instalike.Post;
  isLast: boolean;
  onAppear: () => void;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = entry?.isIntersecting;

  useEffect(() => {
    if (!isLast || !isVisible) return;
    onAppear();
  }, [isLast, isVisible, onAppear]);

  return (
    <div ref={ref}>
      {post.id}
      {post.caption}
    </div>
  );
};

export default PostPreview;
