import { Layout } from "@/components/layout";
import type { FC } from "hono/jsx";

export const Home: FC = async () => {
	return (
		<Layout title="Home">
			<h1>Homepage</h1>
		</Layout>
	);
};
