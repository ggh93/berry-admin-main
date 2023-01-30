import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Navigator = styled.nav`
	position: fixed;
	width: 280px;
	height: 1000px;
	top: 80px;
	left: 0px;
	background: #e6e6e6;
	.nav_items {
		width: 280px;
		flex-direction: column;
		align-items: baseline;
		font-size: 15px;
		font-weight: bold;
		display: flex;
		text-align: center;

		button:hover {
			background: rgb(217, 184, 255);
		}
	}
	.nav_buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 250px;
		height: 50px;
		border-radius: 24px;
		margin: 10px 10px 10px;
	}
	.selected {
		background: #667eff;
	}
	.img_logo {
		margin: 10px 40px 10px 40px;
		width: 100px;
	}
	.test {
		margin: auto;
	}
	/* .nav_items ul > li {
		display: grid;
		margin-left: 8px;
	}
	.nav_items ul > li:nth-child(-n + 7) > a {
		color: #03cf5d;
	}
	.nav_items > p {
		text-decoration: none;
		cursor: pointer;
	} */
`;

interface Nav {
	children: ReactNode;
}

export default function Nav({ children }: Nav) {
	return <Navigator>{children}</Navigator>;
}
