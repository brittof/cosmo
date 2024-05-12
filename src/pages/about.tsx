import type { FC } from "hono/jsx";

import { Layout } from "@/components/layout";

export const About: FC = async () => {
	return (
		<Layout title="About">
			<h1>About</h1>
		</Layout>
	);
};
