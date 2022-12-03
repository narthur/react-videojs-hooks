import { HTMLProps, useContext, useEffect } from "react";
import { VideoJsContext } from "./VideoJsProvider";
import useVideoReducer from "./Video.reducer";

export default function Video(props: HTMLProps<HTMLVideoElement>) {
  const options = useContext(VideoJsContext);
  const digest = JSON.stringify({ ...options, ...props });

  const [state, dispatch] = useVideoReducer({
    options,
    props,
  });

  useEffect(() => {
    dispatch({
      type: "UPDATE",
      payload: {
        options,
        props,
      },
    });
  }, [dispatch, options, props]);

  return <div ref={state.ref} />;
}
