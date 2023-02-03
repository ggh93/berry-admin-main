import styled from '@emotion/styled';
import { ReactNode } from 'react';

const HeaderStyle = styled.header`
	margin: auto;
	width: 100%;
	height: 72px;
	margin-bottom: 5px;
	display: flex;
	align-items: center;
	justify-content: start;
	position: fixed;
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
		margin: 8px 0px 0px 52px;
		width: 150px;
	}
`;
interface Header {
	children: ReactNode;
}

export default function Header({ children }: Header) {
	return <HeaderStyle>{children}</HeaderStyle>;
}
