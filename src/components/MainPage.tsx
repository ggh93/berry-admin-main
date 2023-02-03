import styled from '@emotion/styled';
import { ReactNode } from 'react';

const MainStyle = styled.main`
	min-height: 700px;
	.links {
		top: 16px;
		right: 0;
	}
	.admin {
		background: black;
		border-radius: 20px;
	}
	.main-header {
		border-bottom: 1px solid #d8dbef;
		top: 0px;
		display: flex;
		position: fixed;
		width: 85%;
		height: 72px;
		justify-content: space-between;
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
		display: flex;
		align-items: center;
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
		margin: 20px 5px 20px 35px;
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
		width: 25%;
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
		margin-left: 75px;
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
	.frame-text-top {
		font-size: 15px;
		font-weight: 500;
		line-height: 20px;
		text-align: left;
		color: #6f728a;
	}
	.frame-text-mid {
		margin-top: 13px;
		font-size: 20px;
		font-weight: 500;
		line-height: 24px;
		text-align: left;
	}
	.frame-text-bottom {
		display: flex;
		margin-top: 13px;
		font-size: 11px;
		font-weight: 400;
		line-height: 13px;
		text-align: left;
		color: '#4E5165';
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
		font-size: 14px;
		font-weight: 400;
		line-height: 18px;
		text-align: left;
		color: #6f728a;
	}
	.join-box {
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0em;
		text-align: right;
		color: #6f728a;
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
	.no-list-icon {
		width: 120px;
		height: 160px;
		transform: rotate(180deg);
		color: #d8dbef;
		margin: 6px 10px 6px 8px;
	}
	.excel-text {
		font-size: 12px;
	}
	.list-main {
		width: 100%;
		overflow: hidden;
		margin-top: 14px;
		border-top: 1px solid #b0b4d0;
	}
	.table-root {
		display: table;
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		min-width: 650px;
		white-space: nowrap;
	}
	.table-head {
		/* width: 100%; */
		display: table-header-group;
	}
	.table-body {
		/* width: 100%; */
		display: table-row-group;
	}
	.list-head {
		height: 40px;
		display: table-row;
		vertical-align: middle;
		outline: 0px;
	}
	.list-body {
		height: 40px;
		display: table-row;
		vertical-align: middle;
		outline: 0px;
	}
	.list-head-item {
		background: #d8dbef;
		border-right: 0.5px solid #b0b4d0;
		border-bottom: 0.5px solid #b0b4d0;
		height: 100%;
		width: 100%;
		display: table-cell;
		padding: 10px 18px 10px 18px;
	}
	.list-body-item {
		border-right: 0.5px solid #b0b4d0;
		border-bottom: 0.5px solid #b0b4d0;
		height: 100%;
		width: 100%;
		display: table-cell;
		padding: 10px 18px 10px 18px;
	}
	.list-body-shortening {
		text-overflow: ellipsis;
		overflow: hidden;
		max-width: 300px;
	}
	.list-body-center {
		color: #4d69ff;
		text-align: center;
	}
	.button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
		gap: 10px;
		width: 54px;
		height: 30px;
		background: #ff453a;
		color: white;
		border-radius: 5px;
		flex: none;
		order: 0;
		flex-grow: 0;
	}
	th:last-child {
		border-right: none;
	}
	td:last-child {
		border-right: none;
	}
	.user-detail {
		margin: 20px 0px;
		display: flex;
		flex-direction: column;
		height: 194px;
		background: #d8dbef;
		border-radius: 18px;
	}
	.user-profile {
		margin: 14px;
		background: #d8dbef;
	}
	.person {
		background: #d8dbef;
	}
	.person-box {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		gap: 18px;
		width: 400px;
	}
	.person-icon {
		margin: 10px;
		width: 116px;
		height: 116px;
		border-radius: 30px;
		background: #f1f3ff;
	}
	.person-text-weight {
		font-weight: 500;
		height: 20px;
	}
	.person-text {
		font-size: 14px;
		height: 20px;
		color: #4e5165;
	}
	.list-body-none {
		display: none;
		flex-direction: column;
		align-items: center;
	}
	.person-radio-box {
		margin: 12px;
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
	.popup-wrap {
		color: #02204729;
		//배경색과 투명도로 살짝 어둡지만 투명한 배경
		//허공에 붕 떠있는 느낌을 주고 싶으면 안넣어도 무방
		justify-content: center; //수평 중앙정렬
		align-items: center; //수직 중앙정렬
		position: fixed; // 포지션 픽스, 화면이 스크롤되더라도 고정되기 위함
		top: 0;
		left: 0;
		right: 0;
		bottom: 0; //모든 방향에 0을 주면 화면에 꽉차게 됩니다.
		display: none;
		//이벤트가 발생할 때 띄우기 위해 숨김
		//처음부터 보이게 하는 상황이라면 display:flex;
		padding: 15px;
		//반응형의 경우 padding이 없으면 박스가 화면에 붙어서 안이뻐짐
	}
`;

interface MainProps {
	children: ReactNode;
}
export default function Main({ children }: MainProps) {
	return <MainStyle>{children}</MainStyle>;
}
