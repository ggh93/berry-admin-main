import Header from './components/HeaderPage';
import Main from './components/MainPage';
import Nav from './components/NavPage';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as Icon from 'react-bootstrap-icons';
import CATEGORIES from './constants/category';
import useStore from './constants/store';

export default function TestPage() {
	const { bears, setBears } = useStore();

	interface Category {
		name: string;
		value: string;
		sub: Sub[];
	}

	type Sub = Omit<Category, 'sub'> & {
		icon: ReactJSXElement;
	};

	const categoryList = Object.values(CATEGORIES).map((category: Category, id: number) => {
		return (
			<>
				<div key={id} style={{ display: 'flex' }}>
					<Icon.PersonFill className="test" />
					<h3 style={{ alignItems: 'start' }}>{category.name}</h3>
				</div>
				{category.sub.map((subCategory: Sub, id: number) => {
					return (
						<button
							key={id}
							onClick={() => {
								setBears(subCategory.name);
							}}
							className={bears === subCategory.name ? 'nav_buttons selected' : 'nav_buttons'}
						>
							{subCategory.name}
						</button>
					);
				})}
			</>
		);
	});

	return (
		<>
			<Header>
				<Logo className="img_logo" />
				<div className="links">
					<a href="/admin" style={{ background: 'red', zIndex: '1000' }}>
						<Icon.PersonFill width="15" height="15" fill="black" />
					</a>
				</div>
			</Header>
			<Nav>
				<div className="nav_items">
					{/* 맵을 돌리고 그 맵의 아이디와 현재 클릭한 메뉴명이 같은걸 select처리 */}
					{categoryList}
				</div>
			</Nav>
			<Main>
				{/* 여기서부터 router & ContentLayout */}
				<div className="main-header">
					<Icon.PersonFill width="15" height="15" fill="black" />
					<h3>회원 / {bears}</h3>
				</div>
				<div className="main-container">
					<div className="temp-box box-one">1</div>
					<div className="temp-box box-two">2</div>
					<div className="temp-box box-three-1">3-1</div>
					<div className="temp-box box-three-2">3-2</div>
					<div className="temp-box box-four-1">4-1</div>
					<div className="temp-box box-four-2">4-2</div>
					<div className="temp-box box-five">5</div>
					<div className="temp-box box-six">6</div>
					<div className="temp-box box-six">6</div>
					<div className="temp-box box-seven">7</div>
					<div className="temp-box box-eight">8</div>
				</div>
			</Main>
		</>
	);
}
