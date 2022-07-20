import { render } from "@testing-library/react";
import VideoJsProvider from "./VideoJsProvider";
import Video from "./Video";
import getPlayer from "../lib/test/getPlayer";

describe("VideoJsProvider", () => {
  it("provides video source", async () => {
    render(
      <VideoJsProvider
        options={{
          sources: [
            {
              src: "https://network.mock/oceans.mp4",
              type: "video/mp4",
            },
          ],
        }}
      >
        <Video />
      </VideoJsProvider>
    );

    const player = await getPlayer();

    expect(player.src()).toEqual("https://network.mock/oceans.mp4");
  });
});
