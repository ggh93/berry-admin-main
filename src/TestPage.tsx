import { useCallback, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Header from './components/HeaderPage';
import Main from './components/MainPage';
// import NavItem from './components/NavItem';
import { NavAccordion, NavHeader, Navigator, NavItem } from './components/NavPage';

import Toolbar from './components/Toolbar';
import CATEGORIES from './components/Categories';
import CategoriesIcon from './components/CategoryIcon';
import { useCategory, useSubCategory } from './constants/store';
import Router from './core/router';
import { Category, Sub } from './types/category';
import { css } from '@emotion/css';

export default function TestPage() {
	const { setCategoryName } = useCategory();
	const { subCategoryName, setSubCategoryName } = useSubCategory();
	const [accordion, setAccordion] = useState(true);
	const [display, setDisplay] = useState('none');
	const navigate = useNavigate();

	const onChangeHandler = (id: string) => {
		navigate(id);
	};

	const onClick = useCallback(() => {
		// 차후에 개발
		setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'block' : 'none'));
	}, []);

	const categoryList = Object.values(CATEGORIES).map((category: Category, id: number) => {
		return (
			<nav key={id}>
				<NavHeader>
					{CategoriesIcon(category.name)}
					<h3 style={{ alignItems: 'start' }}>{category.name}</h3>
					<button
						onClick={() => {
							if (accordion) {
								setAccordion(false);
							} else {
								setAccordion(true);
							}
						}}
						className={accordion === true ? 'accordion_button selected' : 'accordion_button'}
					>
						{accordion ? (
							<Icon.ChevronRight className="accordion" />
						) : (
							<Icon.ChevronDown className="accordion" />
						)}
					</button>
				</NavHeader>
				<NavAccordion>
					<div css={css``}></div>
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
									className={
										subCategoryName === subCategory.name ? 'nav-buttons selected' : 'nav-buttons'
									}
								>
									{subCategory.name}
									<Icon.Pencil />
								</div>
							</button>
						);
					})}
				</NavAccordion>
			</nav>
		);
	});

	return (
		<div style={{ display: 'flex' }}>
			<Header>
				<Logo className="img_logo" />
			</Header>
			<Navigator>
				<Toolbar />
				<nav>
					<div>{categoryList}</div>
				</nav>
			</Navigator>
			{/* <Nav>
				<NavItem>{categoryList}</NavItem>
			</Nav> */}
			<Main>
				<Toolbar />
				<Router />
			</Main>
		</div>
	);
}
