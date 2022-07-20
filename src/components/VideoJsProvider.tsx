import { createContext, ReactNode } from "react";
import { VideoJsPlayerOptions } from "video.js";

type Props = {
  options: VideoJsPlayerOptions;
  children: ReactNode;
};

export const VideoJsContext = createContext<VideoJsPlayerOptions>({});

export default function VideoJsProvider({ options, children }: Props) {
  return (
    <VideoJsContext.Provider value={options}>
      {children}
    </VideoJsContext.Provider>
  );
}
