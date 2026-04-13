"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type UseCarouselOptions = {
  length: number;
  initialIndex?: number;
  enableKeyboard?: boolean;
};

export function useCarousel({
  length,
  initialIndex = 0,
  enableKeyboard = true,
}: UseCarouselOptions) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (length <= 0) return;
      const normalized = ((nextIndex % length) + length) % length;
      setIndex(normalized);
    },
    [length]
  );

  const next = useCallback(() => {
    if (length <= 0) return;
    setDirection(1);
    setIndex((current) => (current + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    if (length <= 0) return;
    setDirection(-1);
    setIndex((current) => (current - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    if (!enableKeyboard || length <= 0) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enableKeyboard, length, prev, next]);

  const helpers = useMemo(() => {
    const leftIndex = length > 0 ? (index - 1 + length) % length : -1;
    const rightIndex = length > 0 ? (index + 1) % length : -1;

    function getPosition(itemIndex: number): "left" | "center" | "right" {
      if (itemIndex === index) return "center";
      if (itemIndex === leftIndex) return "left";
      return "right";
    }

    function isActive(itemIndex: number) {
      return itemIndex === index;
    }

    return {
      leftIndex,
      rightIndex,
      getPosition,
      isActive,
    };
  }, [index, length]);

  return {
    index,
    direction,
    setIndex: goTo,
    next,
    prev,
    ...helpers,
  };
}