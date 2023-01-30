import styled from '@emotion/styled';
import { ReactNode } from 'react';

const HeaderStyle = styled.header`
	margin: auto;
	width: 100%;
	height: 80px;
	margin-bottom: 5px;
	display: flex;
	align-items: center;
	justify-content: start;
	position: fixed;
	background: #e6e6e6;
	nav {
		width: 100%;
		height: 45px;
		position: absolute;
		bottom: 0;
	}
	legend {
		position: absolute !important;
		height: 1px;
		width: 1px;
		overflow: hidden;
		clip: rect(1px 1px 1px 1px);
		clip: rect(1px, 1px, 1px, 1px);
		white-space: nowrap;
	}
	.img_logo {
		margin: 10px 40px 10px 40px;
		width: 200px;
	}
	.links {
		position: absolute;
		top: 16px;
		right: 0;
	}
	.search_box {
		width: 520px;
		height: 50px;
		border: 2px solid #03cf5d;
		display: flex;
		align-items: center;
		input {
			flex: 9; /* search-box내부에서 9만큼의 크기를 차지(비율) */
			height: 46px;
			padding-left: 12px;
			padding-right: 12px;
			border: none;
			outline: none;
			font-size: 18px;
		}
		button {
			flex: 1;
			height: 46px;
			margin: 0;
			padding: 0;
			border: none;
			outline: none;
			background: #03cf5d;
			color: #ffffff;
		}
	}
`;
interface Header {
	children: ReactNode;
}

export default function Header({ children }: Header) {
	return <HeaderStyle>{children}</HeaderStyle>;
}
