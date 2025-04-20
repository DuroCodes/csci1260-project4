"use client";

import { useEditorContext } from "./editor-provider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { THEME_MAP } from "~/utils/themes";
import { LANGUAGES } from "~/utils/languages";

export default function Header() {
  const { language, theme, content, setLanguage, setTheme } =
    useEditorContext();

  const handleSave = () => {
    const encoded = btoa(encodeURIComponent(content));
    const payload = { language, theme, content: encoded };
    console.log(payload);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => location.reload()}>
          new
        </Button>
        <Button variant="outline" onClick={handleSave}>
          save
        </Button>
      </div>
      <div className="flex gap-2">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {LANGUAGES.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger>
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(THEME_MAP).map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
