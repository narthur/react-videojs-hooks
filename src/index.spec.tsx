import { render, waitFor, screen } from "@testing-library/react";
import { Video, VideoJsProvider } from "./index";
import videojs, { VideoJsPlayer } from "video.js";
import { Mock, vitest } from "vitest";
import { useState } from "react";
import fetch from "cross-fetch";

vitest.mock("video.js");

const mockVjs = videojs as unknown as Mock;
mockVjs.mockRestore();

describe("library", () => {
  it("loads videojs", async () => {
    render(
      <VideoJsProvider>
        <Video src="https://api.mock/oceans.mp4" />
      </VideoJsProvider>
    );

    await waitFor(() => expect(videojs).toBeCalled());
  });

  it("can access sample video", async () => {
    const C = () => {
      const [result, setResult] = useState("not loaded");

      void fetch("https://api.mock/oceans.mp4").then(() => {
        setResult("loaded");
      });

      return <>{result}</>;
    };

    render(<C />);

    expect(await screen.findByText("loaded"));
  });

  it("can make mocked network requests", async () => {
    await fetch("https://api.mock/hello");
  });

  it("loads source", async () => {
    render(
      <VideoJsProvider>
        <Video>
          <source src="https://api.mock/oceans.mp4" type="video/mp4" />
        </Video>
      </VideoJsProvider>
    );

    await waitFor(() => expect(mockVjs).toBeCalled());

    const player = mockVjs.mock.results[0].value as VideoJsPlayer;

    await waitFor(() => {
      expect(player.src()).toEqual("https://api.mock/oceans.mp4");
    });
  });
});
