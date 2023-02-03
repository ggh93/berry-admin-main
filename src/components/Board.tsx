import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
	children?: ReactNode;
}

export default function Board({ children }: Props) {
	const Board = styled.div(
		{
			background: 'blue',
			position: 'sticky',
		},
		(props) => ({ color: props.color })
	);
	return <Board>{children}</Board>;
}
