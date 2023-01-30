import styled from '@emotion/styled';
import { MouseEventHandler, ReactNode } from 'react';

interface Button {
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
	children: ReactNode;
}
const ButtonBox = styled.button`
	margin: 5px;
	padding: 12px;
	color: #19ce60;
	font-size: 24px;
	border-radius: 4px;
	font-weight: bold;
	/* color: black; */
	&:hover {
		color: black;
	}
`;

export default function Button({ onClick, children }: Button) {
	return (
		<ButtonBox className="logo_area" onClick={onClick}>
			{children}
		</ButtonBox>
	);
}
