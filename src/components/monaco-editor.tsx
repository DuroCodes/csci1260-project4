import { useEditorContext } from "./editor-provider";
import { THEME_MAP } from "~/utils/themes";
import { useEffect, useRef } from "react";
import { Editor, OnMount, type Monaco } from "@monaco-editor/react";
import monokaiTheme from "monaco-themes/themes/Monokai.json";
import type { editor } from "monaco-editor";

export default function MonacoEditor() {
  const { language, theme, content, setContent } = useEditorContext();

  useEffect(() => {
    const colors = THEME_MAP[theme];
    if (!colors) return;

    Object.entries(colors.shadcn).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  const handleEditorDidMount = (monaco: Monaco) => {
    Object.entries(THEME_MAP).forEach(([key, value]) => {
      monaco.editor.defineTheme(
        key,
        value.monaco as editor.IStandaloneThemeData,
      );
    });

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      tsx: "react",
    });
  };

  return (
    <Editor
      height="600px"
      theme={theme}
      language={language}
      value={content}
      onChange={(val) => setContent(val || "")}
      beforeMount={handleEditorDidMount}
      options={{
        fontSize: 14,
        wordWrap: "off",
        minimap: { enabled: false },
        automaticLayout: true,
        bracketPairColorization: {
          enabled: true,
        },
        formatOnPaste: true,
        formatOnType: true,
        fontFamily: "var(--font-jetbrains-mono)",
      }}
    />
  );
}
