import { useReducer, useState } from "react";

const NEXT = "NEXT";
const PREVIOUS = "PREVIOUS";

type SliderState = {
  length: number;
  current: number;
};

type SliderAction = {
  type: typeof NEXT | typeof PREVIOUS;
};

const sliderReducer = (state: SliderState, action: SliderAction) => {
  switch (action.type) {
    case NEXT:
      if (state.current === state.length - 1) return { ...state };
      return { ...state, current: state.current + 1 };
    case PREVIOUS:
      if (state.current === 0) return { ...state };
      return { ...state, current: state.current - 1 };
    default:
      return state;
  }
};

const initialState = (length: number = 0) => ({
  length,
  current: 0,
});

const useSlider = (length: number = 0) => {
  const [state, dispatch] = useReducer(sliderReducer, initialState(length));
  const [offsetX, setOffsetX] = useState(0);

  const next = () => dispatch({ type: NEXT });
  const previous = () => dispatch({ type: PREVIOUS });

  const onTouchStart = (e: React.TouchEvent<HTMLImageElement>) =>
    setOffsetX(e.changedTouches[0].clientX);
  const onTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (Math.abs(offsetX - e.changedTouches[0].clientX) > 50) {
      if (offsetX > e.changedTouches[0].clientX) next();
      else previous();
    }
  };

  return {
    currentSlideIndex: state.current,
    next,
    previous,
    onTouchMove,
    onTouchStart,
  };
};

export default useSlider;
