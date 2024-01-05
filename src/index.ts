import { Elysia } from "elysia";
import { commentsByPostRouter } from "./presentation/routes";

const app = new Elysia()
  .use(commentsByPostRouter)
  .get("/", () => "Hello Elysia")
  .listen(4001, () => {
    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
  })