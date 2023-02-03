import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
	children: ReactNode;
}

export default function NavItem({ children }: Props) {
	const NavItem = styled.div``;
	return <NavItem>{children}</NavItem>;
}
