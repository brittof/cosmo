import { Style, css } from "hono/css";
import type { FC } from "hono/jsx";

import { Menu } from "@/components/menu";

const globalStyles = css`
	margin: 0;
	padding: 1rem;
	box-sizing: border-box;

	font-family: "Zed Sans";

	nav {
		display: flex;
		align-items: center;
		gap: 2rem;

		> a {
			font-size: 1.3rem;
			font-weight: 600;
			text-decoration: none;
            color: inherit;
		}

		menu {
			display: flex;
			align-items: center;
			gap: 2rem;

			padding: 0;
			margin: 0;

			li {
				list-style: none;
			}

			a {
				text-decoration: none;
				color: inherit;
			}
		}
	}
`;
export const Layout: FC = async ({ children, title }) => {
	return (
		<html lang="pt-BR">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width" />
				<title>{title}</title>
				<Style />
			</head>
			<body class={globalStyles}>
				<Menu />

				{children}
			</body>
		</html>
	);
};
