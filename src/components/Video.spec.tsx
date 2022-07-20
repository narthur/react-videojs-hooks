import { render, waitFor } from "@testing-library/react";
import Video from "./Video";
import videojs from "video.js";
import getPlayer from "../lib/test/getPlayer";

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
