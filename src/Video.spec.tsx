import { render, waitFor } from "@testing-library/react";
import { Video } from "./index";
import videojs, { VideoJsPlayer } from "video.js";
import { Mock, vitest } from "vitest";

vitest.mock("video.js");

const mockVjs = videojs as unknown as Mock;
mockVjs.mockRestore();

const getPlayer = async (): Promise<VideoJsPlayer> => {
  await waitFor(() => expect(mockVjs).toBeCalled());

  return mockVjs.mock.results[0].value as VideoJsPlayer;
};

describe("Video", () => {
  it("loads videojs", async () => {
    render(<Video />);

    await waitFor(() => expect(videojs).toBeCalled());
  });

  it("loads source", async () => {
    render(
      <Video>
        <source src="https://network.mock/oceans.mp4" type="video/mp4" />
      </Video>
    );

    const player = await getPlayer();

    await waitFor(() => {
      expect(player.src()).toEqual("https://network.mock/oceans.mp4");
    });
  });

  it("picks up autoplay attribute", async () => {
    render(<Video autoPlay />);

    const player = await getPlayer();

    await waitFor(() => {
      expect(player.autoplay()).toEqual(true);
    });
  });
});
