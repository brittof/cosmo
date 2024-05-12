import chalk from "chalk";
import { app } from "./app";

Bun.serve({
	port: Bun.env.PORT || 3333,
	fetch: app.fetch
});

console.log(
	"Starting server 🔥",
	"\n\n",
	"-",
	chalk.hex("#35bb65").bold(`http://localhost:${Bun.env.PORT}`)
);
