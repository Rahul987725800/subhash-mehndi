import { useState, createContext } from 'react';

export const GlobalStateContext = createContext();
export const GlobalStateProvider = ({ children }) => {
  const [swipeUsed, setSwipeUsed] = useState(false);
  const [swipeAllowedByParent, setSwipeAllowedByParent] = useState({
    onSwipedLeft: true,
    onSwipedRight: true,
    onSwiped: true,
    onSwiping: true,
  });
  const exportedValues = {
    swipeUsed,
    setSwipeUsed,
    swipeAllowedByParent,
    setSwipeAllowedByParent,
  };
  return (
    <GlobalStateContext.Provider value={exportedValues}>
      {children}
    </GlobalStateContext.Provider>
  );
};
