import { ReactNode } from "react";

export const Pages: Record<string, () => ReactNode> = {
  "#intro": () => <div>Intro</div>,
  "#manuals-specifications": () => <div>Manuals Specifications</div>,
  "#code-editors": () => <div>Code Editors</div>,
  "#devtools": () => <div>Developer Console</div>,
};
