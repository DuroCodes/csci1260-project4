import type { editor } from "monaco-editor";
import monokaiTheme from "monaco-themes/themes/Monokai.json";
import catppuccinTheme from "~/utils/data/catppuccin.json";

type ShadCnKeys =
  | "background"
  | "foreground"
  | "card"
  | "card-foreground"
  | "popover"
  | "popover-foreground"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "muted"
  | "muted-foreground"
  | "accent"
  | "accent-foreground"
  | "destructive"
  | "border"
  | "input"
  | "ring";
type ShadCnThemeData = Record<ShadCnKeys, string>;

export const THEME_MAP: Record<
  string,
  { monaco: editor.IStandaloneThemeData; shadcn: ShadCnThemeData }
> = {
  dark: {
    monaco: {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {},
    },
    shadcn: {
      background: "#1e1e1e",
      foreground: "#d4d4d4",
      card: "#252526",
      "card-foreground": "#cccccc",
      popover: "#2d2d30",
      "popover-foreground": "#d4d4d4",
      primary: "#0e639c",
      "primary-foreground": "#ffffff",
      secondary: "#3c3c3c",
      "secondary-foreground": "#cccccc",
      muted: "#2a2d2e",
      "muted-foreground": "#999999",
      accent: "#007acc",
      "accent-foreground": "#ffffff",
      destructive: "#f44747",
      border: "#3c3c3c",
      input: "#3c3c3c",
      ring: "#007acc",
    },
  },
  light: {
    monaco: {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {},
    },
    shadcn: {
      background: "#ffffff",
      foreground: "#1e1e1e",
      card: "#f3f3f3",
      "card-foreground": "#1e1e1e",
      popover: "#f3f3f3",
      "popover-foreground": "#1e1e1e",
      primary: "#0066bf",
      "primary-foreground": "#ffffff",
      secondary: "#e0e0e0",
      "secondary-foreground": "#000000",
      muted: "#f0f0f0",
      "muted-foreground": "#666666",
      accent: "#0066bf",
      "accent-foreground": "#ffffff",
      destructive: "#d13438",
      border: "#cccccc",
      input: "#f3f3f3",
      ring: "#0078d4",
    },
  },
  monokai: {
    monaco: monokaiTheme as editor.IStandaloneThemeData,
    shadcn: {
      background: "#272822",
      foreground: "#f8f8f2",
      card: "#2d2d2d",
      "card-foreground": "#f8f8f2",
      popover: "#333333",
      "popover-foreground": "#f8f8f2",
      primary: "#66d9ef",
      "primary-foreground": "#272822",
      secondary: "#75715e",
      "secondary-foreground": "#f8f8f2",
      muted: "#3e3d32",
      "muted-foreground": "#a59f85",
      accent: "#fd971f",
      "accent-foreground": "#272822",
      destructive: "#f92672",
      border: "#3e3d32",
      input: "#3e3d32",
      ring: "#a6e22e",
    },
  },
  catppuccin: {
    monaco: catppuccinTheme as editor.IStandaloneThemeData,
    shadcn: {
      background: "#1E1E2E",
      foreground: "#D9E0EE",
      card: "#25273A",
      "card-foreground": "#D9E0EE",
      popover: "#25273A",
      "popover-foreground": "#D9E0EE",
      primary: "#F2C94C",
      "primary-foreground": "#1E1E2E",
      secondary: "#F2C94C",
      "secondary-foreground": "#1E1E2E",
      muted: "#3B4261",
      "muted-foreground": "#D9E0EE",
      accent: "#F2C94C",
      "accent-foreground": "#1E1E2E",
      destructive: "#F28FAD",
      border: "#3B4261",
      input: "#3B4261",
      ring: "#F2C94C",
    },
  },
};
