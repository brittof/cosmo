import type { FC } from "hono/jsx";

export const Menu: FC = async () => {
	return (
		<nav>
			<a href="/">Codikin</a>

			<menu>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
			</menu>
		</nav>
	);
};
