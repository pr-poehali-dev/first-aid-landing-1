import React, { createContext, useContext, useState, ReactNode } from "react";

type EditContextType = {
  isEditMode: boolean;
  toggleEditMode: () => void;
};

const EditContext = createContext<EditContextType | undefined>(undefined);

export const EditProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <EditContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEditMode = () => {
  const context = useContext(EditContext);
  if (context === undefined) {
    throw new Error("useEditMode must be used within an EditProvider");
  }
  return context;
};
