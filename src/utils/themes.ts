import type { editor } from "monaco-editor";

export const THEME_MAP: Record<string, editor.IStandaloneThemeData> = {
  "vs-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#1e1e1e",
      "editor.foreground": "#d4d4d4",
    },
  },
  light: {
    base: "vs",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#ffffff",
      "editor.foreground": "#000000",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#f8f8f2",
    },
  },
};
