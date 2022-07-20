import videojs from "video.js";
import { HTMLProps, useCallback, useContext } from "react";
import { VideoJsContext } from "./VideoJsProvider";

export default function Video(props: HTMLProps<HTMLVideoElement>) {
  const context = useContext(VideoJsContext);
  const digest = JSON.stringify(props);

  const vjsRef = useCallback(
    (el: HTMLVideoElement) => {
      if (!el) return;
      videojs(el, context);
    },
    [context]
  );

  return (
    <div data-vjs-player={true} key={digest}>
      <video ref={vjsRef} {...props} />
    </div>
  );
}
