import { Style, css } from "hono/css";
import type { FC } from "hono/jsx";

const styles = css`
	*, *::before, *::after {
		margin: 0;
        padding: 0;
		box-sizing: border-box;
	}

	font-family: "Zed Sans";

	height: 100dvh;

	display: grid;
	grid-gap: 2rem;
	place-content: center;


	figcaption {
		display: grid;
		grid-gap: 2rem;
		place-items: center;

		h1 {
			font-size: 3rem;
			text-transform: uppercase;
		}

		a {
			color: inherit;
			text-decoration: none;
			font-weight: 600;

			border: 2px solid #e2e8f0;
			padding: 0.4rem 0.8rem;
			border-radius: 4px;

			inline-size: fit-content;

			transition: 250ms;

			&:hover {
				background-color: #b2f2bb;
				border-color: #35bb65;
			}
		}
	}

`;

export const NotFound: FC = () => {
	return (
		<>
			<Style />

			<figure class={styles}>
				<img src="https://i.imgur.com/cIcUjdH.png" alt="Não deu" />

				<figcaption>
					<h1>Page not Found</h1>

					<a href="/">Go to Homepage</a>
				</figcaption>
			</figure>
		</>
	);
};
