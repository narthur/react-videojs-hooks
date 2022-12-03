import { HTMLProps, RefCallback, useCallback, useReducer } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import { createRoot } from "react-dom/client";

type State = {
  options: VideoJsPlayerOptions;
  props: HTMLProps<HTMLVideoElement>;
  player?: VideoJsPlayer;
  video?: HTMLDivElement;
  ref?: RefCallback<HTMLDivElement>;
};

type Action =
  | {
      type: "INIT";
    }
  | {
      type: "UPDATE";
      payload: Partial<State>;
    };

const isEqual = (a: unknown, b: unknown): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const updateState = (s: State, d: Partial<State>): State => {
  const n = { ...s, ...d };

  if (!s.ref || !isEqual(s.options, d.options)) {
    n.ref = (el: HTMLDivElement) => {
      if (!el) return;

      const root = createRoot(el);

      root.render(
        <div data-vjs-player={true}>
          <video
            ref={(el) => {
              if (!el) return;
              videojs(el, n.options);
            }}
            {...n.props}
          />
        </div>
      );

      videojs(el, n.options);
    };
  }

  return n;
};

const videoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INIT":
      return state;
    case "UPDATE":
      return updateState(state, action.payload);
    default:
      return state;
  }
};

export default function useVideoReducer(initialState: State) {
  return useReducer(videoReducer, initialState);
}
