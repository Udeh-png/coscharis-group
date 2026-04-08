"use client";

import { createContext, Dispatch, useState } from "react";

export const BodyVisibilityContext = createContext<
  [boolean, Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);

export const BodyVisibilityProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [bodyIsVisible, setBodyIsVisible] = useState(false);

  return (
    <BodyVisibilityContext.Provider value={[bodyIsVisible, setBodyIsVisible]}>
      {children}
    </BodyVisibilityContext.Provider>
  );
};
