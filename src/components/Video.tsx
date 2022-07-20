import videojs from "video.js";
import { HTMLProps } from "react";

const vjsRef = (el: HTMLVideoElement) => {
  if (!el) return;
  videojs(el);
};

export default function Video(props: HTMLProps<HTMLVideoElement>) {
  const digest = JSON.stringify(props);

  return (
    <div data-vjs-player={true} key={digest}>
      <video ref={vjsRef} {...props} />
    </div>
  );
}
