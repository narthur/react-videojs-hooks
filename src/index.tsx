import { HTMLProps, ReactNode } from "react";
import videojs from "video.js";

export function VideoJsProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function Video(props: HTMLProps<HTMLVideoElement>) {
  return (
    <video
      ref={(el: HTMLVideoElement) => {
        if (!el) return;
        videojs(el);
      }}
      {...props}
    />
  );
}
