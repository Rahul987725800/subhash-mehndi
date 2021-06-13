import { useState, useEffect } from 'react';
export function useScrollControl(len, delay) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [loadedFirstTime, setLoadedFirstTime] = useState(true);
  const [scrollInterval, setScrollInterval] = useState();
  const [scrollTimeout, setScrollTimeout] = useState();
  let componentMounted = true;
  const startAutomaticScroll = () => {
    const i = setInterval(() => {
      // console.log('auto next Item');
      // console.log(componentMounted);
      if (componentMounted) nextItem();
    }, delay);
    setScrollInterval(i);
  };
  useEffect(() => {
    // console.log('start auto scroll');
    startAutomaticScroll();
    return () => {
      componentMounted = false;
    };
  }, []);
  const nextItem = () => {
    setActiveItemIndex((prevActiveItemIndex) => {
      if (prevActiveItemIndex === len - 1) {
        return 0;
      } else {
        return prevActiveItemIndex + 1;
      }
    });
  };
  const prevItem = () => {
    setActiveItemIndex((prevActiveItemIndex) => {
      if (prevActiveItemIndex === 0) {
        return len - 1;
      } else {
        return prevActiveItemIndex - 1;
      }
    });
  };
  const manualControl = () => {
    setLoadedFirstTime(false);
    clearInterval(scrollInterval);
    clearTimeout(scrollTimeout);
    const t = setTimeout(() => {
      // console.log('resumed auto scroll');
      startAutomaticScroll();
    }, delay);
    setScrollTimeout(t);
  };
  return {
    loadedFirstTime,
    activeItemIndex,
    nextItem,
    prevItem,
    manualControl,
  };
}
