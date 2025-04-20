"use client";

import { useEditorContext } from "./editor-provider";
import { THEME_MAP } from "~/utils/themes";
import { useEffect } from "react";
import { Editor } from "@monaco-editor/react";

export default function MonacoEditor() {
  const { language, theme, content, setContent } = useEditorContext();

  useEffect(() => {
    const colors = THEME_MAP[theme]?.colors;
    if (!colors) return;

    document.documentElement.style.setProperty(
      "--background",
      colors["editor.background"],
    );

    document.documentElement.style.setProperty(
      "--foreground",
      colors["editor.foreground"],
    );
  }, [theme]);

  return (
    <Editor
      height="600px"
      theme={theme}
      language={language}
      value={content}
      onChange={(val) => setContent(val || "")}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        automaticLayout: true,
      }}
    />
  );
}
