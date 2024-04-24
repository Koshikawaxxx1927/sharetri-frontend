"use client";

import { useIntersectionObserver } from "@/hooks";
import React, { useEffect, useRef, useState } from "react";

interface InfiniteScrollProps<T> {
  array: T[];
  arrayPerPage: number;
  loader: (batch: number) => void;
}

const InfiniteScroll = <T,>({
  array,
  arrayPerPage,
  loader,
}: InfiniteScrollProps<T>) => {
  const [batch, setBatch] = useState<number>(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const showElements = async (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setBatch((batch) => batch + arrayPerPage);
      }
    });
  };
  // カスタムフックを呼ぶ
  useIntersectionObserver([ref], showElements);

  useEffect(() => {
    loader(batch);
  }, [batch]);
  return (
    <>
      {array.length >= batch + arrayPerPage && (
        <div ref={ref} className="opacity-0">
          ref
        </div>
      )}
    </>
  );
};

export default InfiniteScroll;
