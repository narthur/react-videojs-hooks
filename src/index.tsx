import { ReactNode } from "react";

export function VideoJsProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export { default as Video } from "./Video";
