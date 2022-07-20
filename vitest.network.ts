import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { ResponseComposition, rest, RestContext, RestRequest } from "msw";
import * as fs from "fs";

const resolveVideo = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  const vid = fs.readFileSync("./__mocks__/sample.mp4", "binary");

  return res(
    ctx.status(200),
    ctx.set("Content-Type", "video/mp4"),
    ctx.body(vid)
  );
};

export const restHandlers = [
  rest.get("https://api.mock/hello", (req, res, ctx) => {
    return res(ctx.status(200), ctx.body("Hello World!"));
  }),
  rest.get("https://api.mock/*.mp4", resolveVideo),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
