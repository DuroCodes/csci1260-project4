"use client";

import { createContext, type ReactNode, useContext, useState } from "react";
import { THEME_MAP } from "~/utils/themes";

interface EditorContext {
  language: string;
  theme: string;
  content: string;
  setLanguage(lang: string): void;
  setTheme(theme: string): void;
  setContent(content: string): void;
}

const EditorContext = createContext<EditorContext | null>(null);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("plain");
  const [theme, setTheme] = useState(Object.keys(THEME_MAP)[0]);
  const [content, setContent] = useState("");

  return (
    <EditorContext.Provider
      value={{ language, theme, content, setLanguage, setTheme, setContent }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context)
    throw new Error("useEditorContext must be used within an EditorProvider");
  return context;
};
