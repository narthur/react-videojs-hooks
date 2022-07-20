import fetch from "cross-fetch";

describe("library", () => {
  it("can make network requests", async () => {
    await fetch("https://network.mock/hello");
    await fetch("https://network.mock/oceans.mp4");
  });
});
