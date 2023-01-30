import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
// import { ArrowRight, PersonFill } from 'react-bootstrap-icons';
import * as Icon from 'react-bootstrap-icons';

interface Category {
	name: string;
	value: string;
	sub: Sub[];
}

type Sub = Omit<Category, 'sub'> & {
	icon: ReactJSXElement;
};

const CATEGORIES: { [key: string]: Category } = {
	users: {
		name: '회원',
		value: '/user',
		sub: [
			{
				name: '회원 정보 관리',
				value: '/users',
				icon: <Icon.PersonFill width="15" height="15" color="black" />,
			},
			{
				name: '신고 회원 관리',
				value: '/report',
				icon: <Icon.PersonFill width="15" height="15" color="black" />,
			},
			{
				name: '차단 회원 관리',
				value: '/block',
				icon: <Icon.PersonFill width="15" height="15" color="black" />,
			},
		],
	},
	Home: {
		name: 'Home',
		value: '/home',
		sub: [
			{
				name: '메인 배너 관리',
				value: '/banner',
				icon: <Icon.PersonFill width="15" height="15" color="black" />,
			},
			{
				name: '노출 컨텐츠 관리',
				value: '/contents',
				icon: <Icon.PersonFill width="15" height="15" color="black" />,
			},
			{
				name: '팝업 관리',
				value: '/popup',
				icon: <Icon.PersonFill width="15" height="15" color="black" />,
			},
		],
	},
};

export default CATEGORIES;
