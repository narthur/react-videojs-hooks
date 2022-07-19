import { render } from "@testing-library/react";
import { VideoJsProvider, Video } from "./index";

describe("library", () => {
  it("works", () => {
    render(
      <VideoJsProvider>
        <Video />
      </VideoJsProvider>
    );

    expect(true).toBe(true);
  });
});
