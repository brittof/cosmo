import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { browserRouter } from "@/api/routes";

export const app = new Hono();

app.use(logger());
app.use(
	cors({
		origin: "*",
		allowMethods: ["GET", "POST"]
	})
);

app.route("/", browserRouter(app));
