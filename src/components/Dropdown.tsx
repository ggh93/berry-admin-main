import { css } from '@emotion/react';
import { ReactNode } from 'react';
import * as Icon from 'react-bootstrap-icons';

type Props = {
	title: string;
	value: string;
	type: string;
	children: ReactNode;
};

export default function Dropdown({ title, children }: Props) {
	return (
		<div>
			<ul
				css={css`
					width: 125px;
					:hover {
						color: #4d69ff;
						background: #d8dbef;
					}
					height: 30px;
					border-radius: 5px;
					flex: none;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
					padding: 7px 18px 7px 12px;
					display: flex;
					cursor: pointer;
					background: white;
				`}
			>
				<li>
					<button
						value={'전체'}
						// onClick={(e) => handleChangeJoin(e)}
					>
						{'전체'}
					</button>
				</li>
				<Icon.ChevronDown className="mt-1 ml-2" />
			</ul>
		</div>
	);
}
