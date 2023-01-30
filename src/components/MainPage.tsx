import styled from '@emotion/styled';
import { ReactNode } from 'react';

const MainStyle = styled.main`
	background: #f2f4f7;
	min-height: 700px;
	padding-top: 80px;
	margin-left: 280px;
	.main-header {
		border-bottom: 1px solid black;
		top: 27px;
		padding-bottom: 16px;
		display: flex;
		position: fixed;
		width: 100%;
		align-items: center;
		h3 {
			margin-left: 10px;
		}
	}
	.main-container {
		width: 1725px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(24, 40px);
		gap: 10px;
	}
	.temp-box {
		background: #e4e5e6;
		text-align: center;
		font-size: 30px;
		border: 1px solid red;
	}
	.box-one {
		grid-column: 1/3;
		grid-row: 1/3;
	}
	.box-two {
		grid-column: 3/4;
		grid-row: 1/3;
	}
	.box-three-1 {
		grid-column: 1/3;
		grid-row: 3/4;
	}
	.box-three-2 {
		grid-column: 1/3;
		grid-row: 4/7;
	}
	.box-four-1 {
		grid-column: 3/4;
		grid-row: 3/5;
	}
	.box-four-2 {
		grid-column: 3/4;
		grid-row: 5/7;
	}
	.box-five {
		grid-column: 1/3;
		grid-row: 7/23;
	}
	.box-six {
		grid-column: 3/4;
		grid-row: 7/23;
	}
	.box-seven {
		grid-column: 1/3;
		grid-row: 23/25;
	}
	.box-eight {
		grid-column: 3/4;
		grid-row: 23/25;
	}
	.gap {
		background: #f2f4f7;
		height: 10px;
	}
	.border-dee {
		border: 1px solid red;
	}
`;

interface MainProps {
	children: ReactNode;
}
export default function Main({ children }: MainProps) {
	return <MainStyle>{children}</MainStyle>;
}
