// import useSlider from "hooks/useSlider";
import useSlider from "hooks/useSlider";
import React from "react";

const PostsSlider = ({ resources }: { resources: Instalike.Media[] }) => {
  const { length } = resources;
  const { currentSlideIndex, onTouchMove, onTouchStart } = useSlider(length);

  return (
    <div className="relative">
      <div className="grid grid-rows-1 border-b-4 border-paradise-pink">
        {resources.map(({ src, width, height }) => (
          <img
            key={`${src}-${Math.random()}`}
            onTouchMove={onTouchMove}
            onTouchStart={onTouchStart}
            alt=""
            src={src}
            width={width}
            height={height}
            className="row-start-1 row-end-1 block w-full"
          />
        ))}
      </div>
      <div className="flex-center pt-2 gap-1 absolute w-full">
        {length > 1 &&
          resources.map(({ src }, i) => (
            <div
              key={`${src}-${Math.random()}-cursor`}
              className={`w-2 h-2 rounded-full ${
                i === currentSlideIndex
                  ? "bg-acquamarine"
                  : "bg-acquamarine-light"
              }`}
            />
          ))}
      </div>
    </div>
  );
};

export default PostsSlider;
