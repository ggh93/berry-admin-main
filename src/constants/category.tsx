import { Category } from '../types/category';

const CATEGORIES: { [key: string]: Category } = {
	user: {
		name: '회원',
		value: '/user',
		sub: [
			{
				name: '회원 정보 관리',
				value: '/user',
			},
			{
				name: '신고 회원 관리',
				value: '/report',
			},
			{
				name: '차단 회원 관리',
				value: '/block',
			},
			{
				name: '탈퇴 회원 관리',
				value: '/withdraw',
			},
			{
				name: '약관 설정',
				value: '/terms',
			},
			{
				name: '개인정보 이용수집동의서',
				value: '/private',
			},
		],
	},
	home: {
		name: 'Home',
		value: '/home',
		sub: [
			{
				name: '메인 배너 관리',
				value: '/banner',
			},
			{
				name: '노출 컨텐츠 관리',
				value: '/contents',
			},
			{
				name: '팝업 관리',
				value: '/popup',
			},
		],
	},
	shop: {
		name: 'Shop',
		value: '/shop',
		sub: [
			{
				name: '상품 업로드 관리',
				value: '/products',
			},
			{
				name: '옥션 상품 관리',
				value: '/auctions',
			},
			{
				name: '굿즈 상품 관리',
				value: '/goods',
			},
			{
				name: '주문 상품 관리',
				value: '/orders',
			},
		],
	},
	sns: {
		name: '소셜',
		value: '/sns',
		sub: [
			{
				name: '피드 관리',
				value: '/products',
			},
		],
	},
	watch: {
		name: '왓치',
		value: '/watch',
		sub: [
			{
				name: '스트리밍 관리',
				value: '/products',
			},
			{
				name: '펀드 관리',
				value: '/products',
			},
		],
	},
	event: {
		name: '이벤트',
		value: '/event',
		sub: [
			{
				name: '이벤트 관리',
				value: '/products',
			},
			{
				name: '이벤트 당첨 및 관리',
				value: '/products',
			},
		],
	},
	cs: {
		name: '고객응대',
		value: '/cs',
		sub: [
			{
				name: '공지사항',
				value: '/products',
			},
			{
				name: 'FAQ',
				value: '/products',
			},
			{
				name: 'FCM',
				value: '/products',
			},
			{
				name: '전체 메일 발송',
				value: '/products',
			},
			{
				name: '셀럽 히스토리',
				value: '/products',
			},
		],
	},
};

export default CATEGORIES;
