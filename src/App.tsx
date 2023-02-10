import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import CATEGORIES from './components/Categories';
import CategoriesIcon from './components/CategoryIcon';
import { useCategory, useSubCategory } from './constants/store';
import Router from './core/router';
import { MainStyle } from './styles/mainTheme';
import { Category, Sub } from './types/category';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function App() {
	const { setCategoryName } = useCategory();
	const { subCategoryName, setSubCategoryName } = useSubCategory();
	const [accordion, setAccordion] = useState(true);
	const navigate = useNavigate();

	const onChangeHandler = (id: string) => {
		navigate(id);
	};

	const categoryList = Object.values(CATEGORIES).map((category: Category, id: number) => {
		return (
			<nav key={id}>
				<nav
					css={css`
						display: flex;
						width: 236px;
						height: 64px;
						align-items: center;
						justify-content: space-between;
						padding-left: 16px;
						svg {
							width: 22px;
							height: 22px;
						}
					`}
				>
					<button
						className="flex items-center justify-between h-16 w-52"
						onClick={() => {
							if (accordion) {
								setAccordion(false);
							} else {
								setAccordion(true);
							}
						}}
					>
						<div className="flex">
							{CategoriesIcon(category.name)}
							<h3 className="ml-8">{category.name}</h3>
						</div>
						<div>{accordion ? <Icon.ChevronRight /> : <Icon.ChevronDown />}</div>
					</button>
				</nav>
				<nav
					css={css`
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
					`}
				>
					{category.sub.map((subCategory: Sub, id: number) => {
						return (
							<button
								key={id}
								onClick={() => {
									onChangeHandler(subCategory.value);
									setCategoryName(category.name);
									setSubCategoryName(subCategory.name);
								}}
							>
								<div
									aria-label=""
									css={css`
										display: flex;
										align-items: center;
										width: 236px;
										height: 64px;
										border-radius: 16px;
										justify-content: space-around;
										padding: 0px 0px 0px 50px;
										font-size: 15px;
										:hover {
											color: #f6f6fb;
											background: #94a4f9;
											svg {
												background: #94a4f9;
												* {
													color: #94a4f9;
												}
											}
										}
										path {
											color: linen;
										}
										&.selected {
											color: #f6f6fb;
											background: #667eff;
											svg {
												width: 16px;
												height: 16px;
												background: #667eff;
											}
										}
									`}
									className={subCategoryName === subCategory.name ? 'selected' : undefined}
								>
									{subCategory.name}
									<Icon.Pencil />
								</div>
							</button>
						);
					})}
				</nav>
			</nav>
		);
	});

	return (
		<div style={{ display: 'flex' }}>
			<header
				css={css`
					margin: auto;
					width: 100%;
					height: 72px;
					margin-bottom: 5px;
					display: flex;
					align-items: center;
					justify-content: start;
					position: fixed;
					z-index: 1000;
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
				`}
			>
				<button>
					<Logo
						css={css`
							margin: 12px 0px 0px 50px;
							width: 160px;
						`}
					/>
				</button>
			</header>
			<nav
				css={css`
					display: flex;
					flex: 0 0 auto;
					width: 280px;
					padding: 0px 16px;
					flex-shrink: 0;
					top: 100px;
					position: sticky;
					overflow-y: auto;
					overflow-x: hidden;
				`}
			>
				<div style={{ marginTop: '100px' }}>{categoryList}</div>
			</nav>
			<main css={MainStyle}>
				<div className="h-24" />
				<Router />
			</main>
		</div>
	);
}
