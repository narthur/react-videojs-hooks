import videojs, { VideoJsPlayer } from "video.js";
import { waitFor } from "@testing-library/react";
import { Mock } from "vitest";

const mockVjs = videojs as unknown as Mock;

const getPlayer = async (): Promise<VideoJsPlayer> => {
  await waitFor(() => expect(mockVjs).toBeCalled());

  return mockVjs.mock.results[0].value as VideoJsPlayer;
};

export default getPlayer;
