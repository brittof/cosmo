import type { FC } from "hono/jsx";

export const Menu: FC = async () => {
	async function handleClick(event: MouseEvent) {
		event.preventDefault();

		window.location.href = "/coco";
	}

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
