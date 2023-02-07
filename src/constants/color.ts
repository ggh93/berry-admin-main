import { css } from '@emotion/css';

export const COLOR = {
	GrayScale100: '#D8DBEF',
	GrayScale200: '#B0B4D0',
	GrayScale300: '#9BA0C0',
	GrayScale700: '#4E5165', // 기본 색상(폰트등)
	GrayScale950: '#242633', // 진한 회색
	red: 'red',
};

export const FONT = {
	FontSize10: '15px',
};

export const BASE = css`
	color: '${COLOR.red}';
`;
