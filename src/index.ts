import { Elysia } from "elysia";
import { commentsByPost } from "./presentation/routes";

const app = new Elysia()
  .use(commentsByPost)
  .get("/", () => "Hello Elysia")
  .listen(4001, () => {
    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
  })