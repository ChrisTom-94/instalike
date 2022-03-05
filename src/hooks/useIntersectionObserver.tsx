import { RefObject, useEffect, useState } from "react";

const useIntersectionObserver = (
  ref: RefObject<Element>,
  { threshold = 0, root = null, rootMargin = "0%" }: IntersectionObserverInit
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const isVisible = entry?.isIntersecting;

  const update = ([updateEntry]: IntersectionObserverEntry[]) =>
    setEntry(updateEntry);

  useEffect(() => {
    const el = ref?.current;

    if (!el || isVisible) return undefined;

    const options = { threshold, root, rootMargin };
    const obsever = new IntersectionObserver(update, options);
    obsever.observe(el);
    return () => obsever.disconnect();
  }, [ref, isVisible, threshold, root, rootMargin]);

  return entry;
};

export default useIntersectionObserver;
