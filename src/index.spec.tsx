import fetch from "cross-fetch";

describe("library", () => {
  it("can make network requests", async () => {
    await fetch("https://api.mock/hello");
    await fetch("https://api.mock/oceans.mp4");
  });
});
