import styled from '@emotion/styled';
import { ReactNode } from 'react';

const MainStyle = styled.main`
	min-height: 700px;
	.main-header {
		border-bottom: 1px solid #d8dbef;
		top: 0px;
		display: flex;
		position: fixed;
		width: 100%;
		height: 72px;
		align-items: center;
		h3 {
			margin-left: 10px;
		}
	}
	.search-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.search-box {
		display: flex;
		border-radius: 10px;
		margin: 8px 0px;
		width: 390px;
		height: 45px;
		font-size: 14px;
		align-items: center;
		border: 1px solid #d8dbef;
		.search-icon {
			width: 19px;
			height: 19px;
			margin-left: 12px;
			color: #4d69ff;
		}
		.search-text {
			font-style: black;
			margin-left: 20px;
		}
		placeholder {
			opacity: 60%;
		}
		:focus {
			outline: 0;
		}
	}
	.arrow-icon {
		width: 35px;
		height: 17px;
		display: flex;
	}
	.arrow-text {
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
	}
	.category {
		margin-left: 5px;
		margin-right: 5px;
		font-size: 17px;
		font-weight: 600;
		line-height: 22px;
		letter-spacing: 0em;
		text-align: center;
		&.font {
			color: rgba(0, 0, 0, 0.4);
		}
	}
	.main-header-icon {
		width: 18px;
		height: 18px;
		margin: 29px 5px 29px 35px;
	}
	.main-container {
		width: 1725px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(24, 40px);
		gap: 10px;
	}
	.container {
		display: flex;
		width: 855px;
		flex-direction: column;
		font-size: 14px;
	}
	.container-header {
		height: 70px;
		display: flex;
		flex-direction: row;
	}
	.container-item {
		height: 52px;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #b0b4d0;
	}
	.container-item-bottom {
		height: 52px;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #b0b4d0;
		border-bottom: 1px solid #b0b4d0;
	}
	.search-main {
		display: flex;
		flex: 2;
		align-items: center;
		background-color: #f6f6fb;
	}
	.item {
		display: flex;
		flex: 2;
		padding: 0 10px;
		align-items: center;
	}
	.item-radio-box {
		width: 20%;
		display: flex;
		align-items: center;
		input[type='radio'] {
			margin: 0 4px;
			width: 24px;
			height: 24px;
		}
		label {
			font-size: 14px;
		}
	}
	.item-small {
		display: flex;
		padding: 0 10px;
		align-items: center;
	}
	.item-1 {
		display: flex;
		align-items: center;
		width: 154px;
		padding-left: 13px;
		justify-content: flex-start;
		background: #d8dbef;
		p {
			background: #d8dbef;
			font-size: 12px;
			color: #b0b4d0;
		}
	}
	.item-2 {
		display: flex;
		align-items: center;
		width: 146px;
		padding-left: 13px;
		justify-content: flex-start;
		background: #d8dbef;
	}
	.item-input {
		padding: 0 10px;
	}
	.frame-box {
		display: flex;
		flex-direction: row;
		margin-left: 50px;
	}
	.frame-item {
		width: 200px;
		height: 260px;
		border-radius: 18px;
		margin: 20px 10px;
		padding: 20px;
		box-shadow: 1px 2px 6px 1px #0000001f;
	}
	.frame-text-box {
	}
	.frame-text-inner-box {
	}
	.frame-text-header {
	}
	.frame-text-number {
	}
	.percentage {
	}
	.type-box {
		margin-top: 60px;
	}
	.type-box-row {
		margin-top: 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.join-header {
	}
	.join-box {
	}
	.excel-header {
		:hover {
			svg {
				color: green;
			}
		}
	}
	.excel-box {
		border-radius: 5px;
		background: #d8dbef;
		width: 110px;
		height: 28px;
		display: flex;
		align-items: center;
		.file-earmark {
			background: #d8dbef;
			transform: rotate(180deg);
			color: #34c759;
			margin: 6px 10px 6px 8px;
		}
	}
	.excel-text {
		font-size: 12px;
	}
	.list-main {
		margin-top: 14px;
		border-top: 1px solid #b0b4d0;
		border-bottom: 1px solid #b0b4d0;
		max-width: 1000px;
	}
	.list-header {
		height: 40px;
		width: 1566px;
		left: 0px;
		top: 0px;
		border-radius: 0px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.list-header-item {
		background: #d8dbef;
		border-right: 0.5px solid #b0b4d0;
		height: 100%;
		display: flex;
		min-width: 100px;
		display: flex;
		flex-direction: column;
		padding: 10px 50px 10px 18px;
	}
	p:last-child {
		border-right: none;
	}
`;

interface MainProps {
	children: ReactNode;
}
export default function Main({ children }: MainProps) {
	return <MainStyle>{children}</MainStyle>;
}
