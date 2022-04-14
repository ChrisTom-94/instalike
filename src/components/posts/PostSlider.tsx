// import useSlider from "hooks/useSlider";
import useSlider from "hooks/useSlider";
import React from "react";
import { ReactComponent as BackArrow } from "assets/images/arrow.svg";

const PostsSlider = ({ resources }: { resources: Instalike.Media[] }) => {
  const { length } = resources;
  const { currentSlideIndex, onTouchMove, onTouchStart, next, previous } =
    useSlider(length);

  return (
    <div className="relative">
      <div className=" relative grid grid-rows-1 border-b-4 border-paradise-pink">
        {resources.map(
          ({ src, width, height }, i) =>
            currentSlideIndex === i && (
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
            )
        )}
        {length > 1 && (
          <div className="absolute w-full h-full">
            <button
              className="absolute top-2/4"
              type="button"
              onClick={previous}
            >
              <BackArrow stroke-color="white" className="scale-50" />
            </button>
            <button
              className="absolute top-2/4 right-0"
              type="button"
              onClick={next}
            >
              <BackArrow className="rotate-180 scale-50" />
            </button>
          </div>
        )}
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
