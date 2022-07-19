import { render, waitFor } from "@testing-library/react";
import { VideoJsProvider, Video } from "./index";
import videojs from "video.js";
import { vitest } from "vitest";

vitest.mock("video.js");

describe("library", () => {
  it("loads videojs", async () => {
    render(
      <VideoJsProvider>
        <Video src="https://example.com/oceans.mp4" />
      </VideoJsProvider>
    );

    await waitFor(() => expect(videojs).toBeCalled());
  });
});
