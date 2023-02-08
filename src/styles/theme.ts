/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const size = {
	largest: '75em', // 1200px
	large: '56.25em', // 900px
	medium: '37.5em', // 600px
	small: '31.25em', // 500px
	smallest: '25em', // 400px
};

export const theme = {
	mainColor: '#0000ff',
	mq: {
		laptop: `@media only screen and (min-width: ${size.largest})`,
		tablet: `@media only screen and (min-width: ${size.large})`,
		mobile: `@media only screen and (min-width: ${size.small})`,
	},
};

export const BottomLine = css`
	position: relative;
	::before {
		content: '';
		width: 70%;
		height: 1px;
		position: absolute;
		bottom: -1px;
		left: 0;
		background-color: #4260ff;
	}
`;
