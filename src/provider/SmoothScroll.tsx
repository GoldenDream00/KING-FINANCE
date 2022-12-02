import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useWindowSize from '../hook/useWindowSize';
import { useNavigate } from 'react-router-dom';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProps) => {
  // 1.
  const windowSize = useWindowSize();

  const navigate = useNavigate();

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
    setBodyHeight();
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  // 4.
  useEffect(() => {
    setBodyHeight();
    requestAnimationFrame(() => smoothScrollingHandler());
  }, [windowSize, navigate]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current !== null)
      document.body.style.height = `${scrollingContainerRef?.current.scrollHeight}px`;
    console.log('document.body.style.height: ', document.body.style.height);
    console.log('scrollingContainerRef.current.scrollHeight: ', scrollingContainerRef.current?.scrollHeight);
  };

  // 5.
  // useEffect(() => {
  //   requestAnimationFrame(() => smoothScrollingHandler());
  // }, []);

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
