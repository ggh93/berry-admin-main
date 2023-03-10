import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { ReactComponent as Apple } from '../assets/apple.svg';
import { ReactComponent as Google } from '../assets/google.svg';
import ContentLayout from '../layouts/ContentLayout';
import SearchBox from '../layouts/SearchBox';
import dayjs from '../lib/dayjs';

import { COLOR } from '../constants/color';
import Posts from './Posts';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { BottomLine } from '../styles/theme';

export default function Test() {
	const { register, setValue } = useForm<{
		search: string;
		dropdown: {
			social?: Menu;
			category?: Menu;
			gender?: Menu;
			account?: Menu;
		};
	}>();
	const [search, setSearch] = useState('');

	const handleChange = (text: string) => {
		console.log('COLOR ', COLOR.GrayScale700);

		setSearch(text);
	};

	type Menu = {
		title: string;
		value: string;
		group?: string;
	};

	const signUpMethodList: Array<Menu> = [
		{ title: '전체', value: 'all', group: 'sign_up_method' },
		{ title: '구글 계정', value: 'google', group: 'sign_up_method' },
		{ title: '애플 계정', value: 'apple', group: 'sign_up_method' },
		{ title: '기타', value: 'other', group: 'sign_up_method' },
	];

	const categoryList: Array<Menu> = [{ title: '전체', value: 'all', group: 'category' }];

	const userGenderList: Array<Menu> = [
		{ title: '전체', value: 'all', group: 'user_gender' },
		{ title: '남자', value: 'man', group: 'user_gender' },
		{ title: '여자', value: 'woman', group: 'user_gender' },
	];

	const [first, setfirst] = useState<{
		search: string;
		dropdown: {
			social?: Menu;
			category?: Menu;
			gender?: Menu;
			account?: Menu;
		};
	}>({ search: '', dropdown: {} });

	const searchDropBoxCss = css`
		width: 180px;
		height: 36px;
		border-radius: 5px;
		padding: 5px 20px;
		border: 1px solid #d8dbef;
		gap: 10px;
	`;

	const [view, setView] = useState(false); // 추후 blur 추가
	const [joinData, setJoinData] = useState('전체');
	const handleChangeJoin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setJoinData(e.currentTarget.innerHTML);
		setView(false);
	};

	type GroupName = { group: string };
	/**
	 * 각각의 리스트들은 타입에 따라 구조분해 후 재할당하여 입력
	 * @type 타입별로 드롭다운 아이템을 각각 출력
	 * @param string type
	 * @returns 드롭다운 아이템
	 */
	// 입력 따로 ex) DropBox => DropBoxList => DropBoxItem
	const DropDown = () => {
		return (
			<></>
			// <ul
			// 	className="relative shadow menu bg-base-100"
			// 	css={css`
			// 		width: 141px;
			// 		padding: 8px;
			// 		display: flex;
			// 		flex-direction: column;
			// 		align-items: flex-start;
			// 		/* right: 10px; */
			// 		border-radius: 8px;
			// 		box-shadow: 1px 2px 6px 1px #0000001f;
			// 		font-weight: 400;
			// 		font-size: 12px;
			// 		@keyframes slide-fade-in-dropdown-animation {
			// 			0% {
			// 				transform: translateY(10%);
			// 			}

			// 			100% {
			// 				transform: translateY(0);
			// 			}
			// 		}

			// 		.slide-fade-in-dropdown {
			// 			overflow: hidden;
			// 		}
			// 		animation: slide-fade-in-dropdown-animation 0.4s ease;
			// 	`}
			// >
			// 	{signUpMethodList.map((data: Menu, id) => {
			// 		return (
			// 			<li>
			// 				<button
			// 					key={id}
			// 					css={TopButton}
			// 					value={data.value}
			// 					onClick={(e) => handleChangeJoin(e)}
			// 				>
			// 					{data.title}
			// 				</button>
			// 			</li>
			// 		);
			// 	})}
			// 	{/* 여기는 호출따로 */}
			// </ul>
		);
	};

	// Default
	const TopButton = css`
		width: 125px;
		:hover {
			color: #4d69ff;
			background: #d8dbef;
		}
		height: 30px;
		border-radius: 5px;
		flex: none;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 7px 18px 7px 12px;
		display: flex;
		cursor: pointer;
		background: white;
	`;
	return (
		<>
			<ContentLayout>
				<div
					css={css`
						display: flex;
						flex-direction: row;
					`}
				>
					<div className="container">
						<div className="container-header">
							<div className="search-main">
								<SearchBox
									placeholder="계정 이메일, 휴대번호, 닉네임"
									text={search}
									setText={setSearch}
									onChange={(e) => {
										handleChange(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className="container-item">
							<div className="item-1">가입 일자</div>
							<div className="item">
								<input
									type={'date'}
									defaultValue={dayjs().format('YYYY-MM-DD')}
									style={{ width: '115px' }}
								/>
								<Icon.ArrowRightShort width={20} height={30} style={{ margin: '0px 20px' }} />
								<input
									type={'date'}
									defaultValue={dayjs().format('YYYY-MM-DD')}
									style={{ width: '115px' }}
								/>
							</div>
							<div className="item">
								<div className="item-radio-box">
									<input type={'radio'} id="today" name="contact" value="today" />
									<label htmlFor="today">오늘</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="week" name="contact" value="week" />
									<label htmlFor="week">1주일</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="month" name="contact" value="month" defaultChecked />
									<label htmlFor="month">1개월</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="allday" name="contact" value="all" />
									<label htmlFor="allday">전체</label>
								</div>
							</div>
						</div>
						<div className="container-item">
							<div className="item-1">가입 유형</div>
							<div className="item" css={BottomLine}>
								{/* <div className="h-6 m-1">
									<div
										onClick={() => {
											setView(!view);
										}}
										className="flex justify-between px-3 w-36"
									>
										{joinData}
										<div>
											<Icon.ChevronDown className="mt-1 ml-2" />
										</div>
									</div>
									{view ? <DropDown /> : ''}
								</div> */}
							</div>
							<div className="item-2">카테고리</div>
							<div className="item" css={BottomLine}>
								{/* <Dropdown title="" type="" value="" /> */}
							</div>
						</div>
						<div className="container-item">
							<div className="item-1">회원 성별</div>
							{/* 전체, 남성, 여성 */}
							<div className="item" css={BottomLine}></div>
							<div className="item-2">계좌 인증 여부</div>
							<div className="item" css={BottomLine}>
								{/* 인증,미인증 */}
							</div>
						</div>
						<div className="container-item">
							<div className="item-1">
								회원 연령<p>(복수 선택 가능)</p>
							</div>
							<div className="item">
								<div className="item-radio-box">
									<input type={'radio'} id="all" name="age" value="all" defaultChecked />
									<label htmlFor="all">전체</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="ten" name="age" value="10" />
									<label htmlFor="ten">10대</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="twenty" name="age" value="20" />
									<label htmlFor="twenty">20대</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="thirty" name="age" value="30" />
									<label htmlFor="thirty">30대</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="fourty" name="age" value="40" />
									<label htmlFor="fourty">40대</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="fifty" name="age" value="50" />
									<label htmlFor="fifty">50대</label>
								</div>
								<div className="item-radio-box">
									<input type={'radio'} id="fixty" name="age" value="60" />
									<label htmlFor="fixty">60대 이상</label>
								</div>
							</div>
						</div>
					</div>
					<div className="frame-box">
						<div className="frame-item">
							<div className="frame-text-box">
								<div className="frame-text-top">전체 누적 회원수</div>
								<div className="frame-text-mid">4,612,619 명</div>
								<div className="frame-text-bottom">
									어제 보다{' '}
									<div className="blue_text" style={{ fontSize: '15px' }}>
										151%
									</div>{' '}
									올랐어요.
								</div>
							</div>
							<div className="type-box">
								<div className="join-header">가입 유형</div>
								<div className="type-box-row">
									<Google />
									<div className="join-box">2,516,498 명</div>
								</div>
								<div className="type-box-row">
									<Apple />
									<div className="join-box">2,516,498 명</div>
								</div>
							</div>
						</div>
						<div className="frame-item">
							<div className="frame-text-box">
								<div className="frame-text-inner-box">
									<div className="frame-text-top">전체 누적 회원수</div>
									<div className="frame-text-mid">4,612,619 명</div>
									<div className="frame-text-bottom">
										어제 보다<div className="blue_text">15.9% </div>올랐어요.
									</div>
								</div>
							</div>
							<div className="type-box">
								<div className="join-header">가입 유형</div>
								<div className="type-box-row">
									<Google />
									<div className="join-box">2,516,498 명</div>
								</div>
								<div className="type-box-row">
									<Apple />
									<div className="join-box">2,516,498 명</div>
								</div>
							</div>
						</div>
						<div className="frame-item">
							<div className="frame-text-box">
								<div className="frame-text-inner-box">
									<div className="frame-text-top">전체 누적 회원수</div>
									<div className="frame-text-mid">4,612,619 명</div>
									<div className="frame-text-bottom">
										어제 보다<div className="blue_text">15%</div>올랐어요.
									</div>
								</div>
							</div>
							<div className="type-box">
								<div className="join-header">가입 유형</div>
								<div className="type-box-row">
									<Google />
									<div className="join-box">2,516,498 명</div>
								</div>
								<div className="type-box-row">
									<Apple />
									<div className="join-box">2,516,498 명</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* 온오프 */}
				<div className="user-detail">
					<div className="user-profile">
						<Apple className="person" />
						<div className="person" style={{ display: 'flex' }}>
							<Icon.PersonFill className="person-icon" />
							<div className="person person-box">
								<p className="person person-text-weight">김스토어(남/20대)</p>
								<p className="person person-text">
									서울특별시 강남구 선릉로 119길 14, 지하 1층 (06100)
								</p>
								<div className="person person-text">
									<p className="person person-text">BerryStore@fandomberry.com</p>
									<p className="person person-text">010 - 0000 - 0000</p>
								</div>
							</div>
							<div className="person">
								<div
									className="person"
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										bottom: '25px',
										position: 'relative',
									}}
								>
									<p className="person person-text-weight">알람 받는 유저 수 3,209명</p>
									<p className="person person-text-weight">
										어제 보다<div className="person blue_text">15.9% </div>올랐어요.
									</p>
								</div>
								<div style={{ width: '760px', borderRadius: '20px', height: '120px' }} />
							</div>
							<div
								style={{
									width: '200px',
									height: '120px',
									margin: '20px 20px 0px 20px',
									borderRadius: '20px',
								}}
							>
								<div className="person-radio-box">
									<input type={'radio'} id="user" name="person" value="all" defaultChecked />
									<label htmlFor="user">알람 받는 유저</label>
								</div>
								<div className="person-radio-box">
									<input type={'radio'} id="won" name="person" value="all" />
									<label htmlFor="won">누적 결재 금액</label>
								</div>
								<div className="person-radio-box">
									<input type={'radio'} id="allpoint" name="person" value="all" />
									<label htmlFor="allpoint">보유 포인트</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<button
						className="excel-header"
						onClick={() => {
							console.log('엑셀 다운로드 미구현');
						}}
					>
						<div className="excel-box">
							<Icon.FileEarmark className="file-earmark" />
							<div className="excel-box excel-text">엑셀 다운로드</div>
						</div>
					</button>
					<div style={{ display: 'flex' }}>
						<div style={{ display: 'flex', color: '#4d69ff', alignContent: 'center' }}>
							<label htmlFor="filter" className="arrow-text">
								초기화
							</label>
							<button id="filter" onClick={() => {}}>
								<Icon.ArrowRepeat className="arrow-icon" />
							</button>
						</div>
						<div className="item">
							{/* <option value="" disabled>	계정생성 일자 순</option>
								<option value="date">계정생성 날짜 순</option>
								<option value="point">보유 포인트 순</option>
								<option value="cash">누적 결재 금액 순</option>
								<option value="user">알람 받는 유저수 순</option> */}
						</div>
					</div>
				</div>
				<div className="list-main">
					<table className="table-root">
						<thead className="table-head">
							<tr className="list-head">
								<th className="list-head-item" style={{ width: '150px' }}>
									닉네임
								</th>
								<th className="list-head-item" style={{ width: '250px' }}>
									계정 이메일
								</th>
								<th className="list-head-item">휴대번호</th>
								<th className="list-head-item">보유 포인트</th>
								<th className="list-head-item">누적 결제 금액</th>
								<th className="list-head-item">계좌 인증 여부</th>
								<th className="list-head-item">알림 받은 유저수</th>
								<th className="list-head-item">계정생성 일자</th>
								<th className="list-head-item">차단</th>
							</tr>
						</thead>
						<tbody
							css={css`
								display: table-row-group;
								background-color: #f6f6fb;
								& > tr {
									cursor: pointer;
									& :hover {
										background-color: #d8dbef;
									}
								}
							`}
						>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
							<tr className="list-body">
								<td className="list-body-item" style={{ maxWidth: '100px' }}>
									김스토어
								</td>
								<td className="list-body-item list-body-shortening">Berrystore@fandomberry.com</td>
								<td className="list-body-item">010 - 0000 - 0000</td>
								<td className="list-body-item">32,511 P</td>
								<td className="list-body-item">156,156,489 원</td>
								<td className="list-body-item list-body-center">인증</td>
								<td className="list-body-item">3,194 명</td>
								<td className="list-body-item">2022 - 00 - 00 00:00:00</td>
								<td className="list-body-item">
									<button className="button">차단</button>
								</td>
							</tr>
						</tbody>
					</table>
					<Posts />
				</div>
				{/* 온오프 */}
				<div className="list-body-none">
					<Icon.FileEarmarkFill className="no-list-icon" />
					<div>조회된 정보가 없어요.</div>
					<div>입력 정보를 확인해주세요.</div>
				</div>
			</ContentLayout>
		</>
	);
}
