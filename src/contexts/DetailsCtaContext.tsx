"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

export const DetailsCtaShouldShowContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

export const DetailsCtaContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <DetailsCtaShouldShowContext.Provider value={[shouldShow, setShouldShow]}>
      {children}
    </DetailsCtaShouldShowContext.Provider>
  );
};
