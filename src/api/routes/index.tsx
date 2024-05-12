import type { Hono } from "hono";

import { About } from "@/pages/about";
import { Contact } from "@/pages/contact";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/notFound";

export const browserRouter = (route: Hono) => {
	return route
		.get("/", async (context) => {
			return context.html(<Home />);
		})
		.get("/about", async (context) => {
			return context.html(<About />);
		})
		.get("/contact", async (context) => {
			return context.html(<Contact />);
		})
		.get("/course", async (context) => {
			return context.redirect("/");
		})
		.notFound(async (context) => {
			return context.html(<NotFound />);
		});
};
