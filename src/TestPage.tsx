import Header from './components/HeaderPage';
import Main from './components/MainPage';
import Nav from './components/NavPage';
import { ReactComponent as Logo } from './assets/logo.svg';
import * as Icon from 'react-bootstrap-icons';
import CATEGORIES from './constants/category';
import { useCategory, useSubCategory } from './constants/store';
import { Category, Sub } from './types/category';
import Page from './pages/Test';
import categoryIcon from './constants/categoryIcon';
import { useState } from 'react';

export default function TestPage() {
	const { categoryName, setCategoryName } = useCategory();
	const { subCategoryName, setSubCategoryName } = useSubCategory();
	const [accordion, setAccordion] = useState(true);

	const categoryList = Object.values(CATEGORIES).map((category: Category, id: number) => {
		return (
			<nav key={id}>
				<div className="nav-header">
					{categoryIcon(category.name)}
					<h3 style={{ alignItems: 'start' }}>{category.name}</h3>
					<button
						onClick={() => {
							console.log('categoryName ', category.name);

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
				</div>
				<div className="nav-body">
					<div className={accordion ? 'nav-accordion on' : 'nav-accordion off'}>
						{category.sub.map((subCategory: Sub, id: number) => {
							return (
								<button
									key={id}
									onClick={() => {
										setCategoryName(category.name);
										setSubCategoryName(subCategory.name);
									}}
								>
									<div
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
					</div>
				</div>
			</nav>
		);
	});

	return (
		<div style={{ display: 'flex' }}>
			<Header>
				<Logo className="img_logo" />
				<div className="links">
					<a href="/admin">
						<Icon.PersonFill width="30px" height="30px" fill="white" className="admin" />
					</a>
				</div>
			</Header>
			<Nav>
				<div className="tool-bar" style={{ height: '80px' }} />
				<div className="nav-items">{categoryList}</div>
			</Nav>
			<Main>
				<div className="tool-bar" style={{ height: '80px' }} />
				{/* 여기서부터 router & ContentLayout */}
				<Page />
			</Main>
		</div>
	);
}
