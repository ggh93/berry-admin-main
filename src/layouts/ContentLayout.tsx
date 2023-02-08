import { ReactNode, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import CategoriesIcon from '../components/CategoryIcon';
import { useCategory, useSubCategory } from '../constants/store';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
	children: ReactNode;
}

export default function ContentLayout({ children }: Props) {
	const { categoryName } = useCategory();
	const { subCategoryName } = useSubCategory();

	const [view, setView] = useState(false);
	const DropDown = () => {
		return (
			<div css={TopButtonBox}>
				<button css={TopButton}>마이페이지</button>
				<button css={TopButton}>로그아웃</button>
			</div>
		);
	};
	const TopButtonBox = css`
		width: 141px;
		height: 76px;
		padding: 8px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		position: fixed;
		right: 10px;
		border-radius: 8px;
		box-shadow: 1px 2px 6px 1px #0000001f;
		font-weight: 400;
		font-size: 12px;
		:hover {
		}
	`;
	const TopButton = css`
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
		background: '#D8DBEF';
	`;
	return (
		<div>
			<div className="main-header">
				<div style={{ display: 'flex' }}>
					{CategoriesIcon(categoryName)}
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div className="category font">{categoryName}</div>
						<div className="category font">/</div>
						<div className="category">{subCategoryName}</div>
					</div>
				</div>
				<div className="links">
					<button
						onClick={() => {
							setView(!view);
						}}
					>
						<Icon.PersonFill width="30px" height="30px" fill="white" className="admin" />
					</button>
					{view && <DropDown />}
				</div>
			</div>
			{children}
		</div>
	);
}
