import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { log } from 'console';
import { MouseEvent, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

interface Props {
	total: number;
	limit: number;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({ limit, page, setPage, total }: Props) {
	const numPages = Math.ceil(total / limit); // 마지막번호
	const [isSelectId, setIsSelectId] = useState(0);
	const aa = (event: React.MouseEvent<HTMLButtonElement> | null) => {
		console.log('e ', event?.currentTarget.value);
	};
	// 클릭했을때 isSelectId와
	/**
	 * 1번클릭 -> id값 1 삽입
	 * key === id ? true : false
	 * value === true => background : "green"
	 * value === true => background : "red"
	 */
	return (
		<Nav>
			<Button
				onClick={(e) => {
					console.log('e ', e.currentTarget.value);
					setPage(1);
				}}
				disabled={page === 1}
			>
				<Icon.ChevronDoubleLeft />
			</Button>
			<Button
				onClick={(e) => {
					console.log('e ', e);
					setPage(page - 1);
				}}
				disabled={page === 1}
			>
				<Icon.ChevronLeft />
			</Button>
			{Array(numPages)
				.fill('')
				.map((_, i) => (
					<Button
						style={{
							background: isSelectId === i + 1 ? '#4D69FF' : '',
							color: isSelectId === i + 1 ? 'white' : 'black',
						}}
						key={i + 1}
						onClick={() => {
							setIsSelectId(i + 1);
							setPage(i + 1);
						}}
					>
						{i + 1}
					</Button>
				))}
			<Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
				<Icon.ChevronRight />
			</Button>
			<Button onClick={() => setPage(numPages)} disabled={page === numPages}>
				<Icon.ChevronDoubleRight />
			</Button>
		</Nav>
	);
}

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin: 16px;
`;

const Button = styled.button`
	border: none;
	border-radius: 4px;
	padding: 0px 8px;
	margin: 0;
	/* background: black;
	color: white; */
	font-size: 1rem;
	&:hover {
		background: rgb(217, 184, 255);
		cursor: pointer;
		transform: translateY(-2px);
		svg {
			background: rgb(217, 184, 255);
		}
	}

	&[disabled] {
		background: #4d69ff;
		cursor: revert;
		transform: revert;
		color: white;
		svg {
			background: #4d69ff;
			color: white;
			path {
				color: white;
			}
		}
	}
`;
