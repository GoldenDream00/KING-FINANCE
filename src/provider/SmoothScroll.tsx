import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useWindowSize from '../hook/useWindowSize';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProps) => {
  // 1.
  const windowSize = useWindowSize();

  // 2.
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {
    setTimeout(setBodyHeight, 1000);
  }, []);

  // 4.
  useEffect(() => {
    setTimeout(setBodyHeight, 1000);
  }, [windowSize]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current !== null)
      document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 10) / 10;

    if (scrollingContainerRef.current !== null)
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <SmoothScrollContainer>
      <div ref={scrollingContainerRef}>{children}</div>
    </SmoothScrollContainer>
  );
};

const SmoothScrollContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
