import { HTMLProps, ReactNode } from "react";
import videojs from "video.js";

export function VideoJsProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

const vjsRef = (el: HTMLVideoElement) => {
  if (!el) return;
  videojs(el);
};

export function Video(props: HTMLProps<HTMLVideoElement>) {
  const digest = JSON.stringify(props);

  return (
    <div data-vjs-player={true} key={digest}>
      <video ref={vjsRef} {...props} />
    </div>
  );
}
