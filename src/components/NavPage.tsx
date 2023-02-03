import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Toolbar from './Toolbar';

const Navigator = styled.nav`
	display: flex;
	flex: 0 0 auto;
	width: 280px;
	padding: 0px 20px;
	flex-shrink: 0;
	top: 100px;
	position: sticky;
	height: 800px;
	overflow-y: auto;
	overflow-x: hidden;
	.nav-items {
		width: 250px;
		height: 64px;
		flex-direction: column;
		align-items: baseline;
		font-size: 15px;
		font-weight: bold;
		display: flex;
		text-align: center;
		font-weight: 500;
		font-size: 15px;
		line-height: 20px;
		height: 900px;
		overflow-y: scroll;
	}
	.nav-items::-webkit-scrollbar {
		width: 0.25em;
	}
	.nav-items::-webkit-scrollbar-thumb {
		background-color: #dbdbdb;
	}
	.nav-header {
		display: flex;
		width: 225px;
		height: 64px;
		align-items: center;
		justify-content: space-between;
		padding-left: 20px;
		svg {
			width: 22px;
			height: 22px;
		}
	}
	.nav-body {
	}
	.nav-accordion {
		min-height: 50px;
		height: auto;
		transition-duration: 283ms;
		&.on {
			width: 10px;
		}
		&.off {
			min-height: 0px;
			height: 0px;
			transition-duration: 283ms;
		}
	}
	.nav-buttons {
		display: flex;
		align-items: center;
		width: 236px;
		height: 64px;
		border-radius: 16px;
		justify-content: space-between;
		padding: 0px 15px 0px 54px;
		:hover {
			background: rgb(217, 184, 255);
			svg {
				color: rgb(217, 184, 255);
				background: rgb(217, 184, 255);
			}
		}
		svg {
			color: linen;
		}
		&.selected {
			font-weight: 400;
			font-size: 15px;
			color: #f6f6fb;
			background: #667eff;
			svg {
				width: 16px;
				height: 16px;
				background: #667eff;
			}
		}
	}
	.sub-accordion-button {
		display: flex;
		justify-content: space-between;
		background: #667eff;
		align-items: center;
		svg {
			display: none;
		}
		&.selected {
			color: white;
			background: #667eff;
			svg {
				width: 16px;
				height: 16px;
				background: #667eff;
			}
		}
	}

	.img_logo {
		margin: 10px 40px 10px 40px;
		width: 100px;
	}
	.test {
		margin-right: 3px;
		margin-left: 30px;
		padding-bottom: 1px;
	}
	.accordion {
		margin-left: 100px;
	}
	-webkit-scrollbar-thumb {
		border-radius: 8px;
		background-color: black;
	}
`;

interface Nav {
	children: ReactNode;
}

export default function Nav({ children }: Nav) {
	return (
		<Navigator>
			<nav>{children}</nav>
		</Navigator>
	);
}
