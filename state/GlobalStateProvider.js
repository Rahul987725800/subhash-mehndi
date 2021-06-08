import { useState, createContext } from 'react';

export const GlobalStateContext = createContext();
export const GlobalStateProvider = ({ children }) => {
  const [swipeUsed, setSwipeUsed] = useState(false);

  const exportedValues = {
    swipeUsed,
    setSwipeUsed,
  };
  return (
    <GlobalStateContext.Provider value={exportedValues}>
      {children}
    </GlobalStateContext.Provider>
  );
};
