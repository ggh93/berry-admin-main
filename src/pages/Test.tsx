import { useState } from 'react';
import ContentLayout from '../layouts/ContentLayout';
import SearchBox from '../layouts/SearchBox';
import * as Icon from 'react-bootstrap-icons';
import { ReactComponent as Apple } from '../assets/apple.svg';
import { ReactComponent as Google } from '../assets/google.svg';
import dayjs from '../lib/dayjs';

export default function Testtes() {
	const [search, setSearch] = useState('');
	const handleChange = (text: string) => {
		setSearch(text);
	};
	return (
		<ContentLayout>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
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
						<div className="item-1">계정 생성 날짜</div>
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
								<input type={'radio'} id="all" name="contact" value="all" />
								<label htmlFor="all">전체</label>
							</div>
						</div>
					</div>
					<div className="container-item">
						<div className="item-1">가입 유형</div>
						<div className="item">
							<select id="join-select" style={{ width: '125px' }}>
								<option value="all">전체</option>
								<option value="google">구글 계정</option>
								<option value="apple">애플 계정</option>
								<option value="default">기타</option>
							</select>
						</div>
						<div className="item-2">카테고리</div>
						<div className="item">
							<select id="join-select" style={{ width: '125px' }} disabled>
								<option value="all">전체</option>
								<option value="google">구글 계정</option>
								<option value="apple">애플 계정</option>
								<option value="default">기타</option>
							</select>
						</div>
					</div>
					<div className="container-item">
						<div className="item-1">회원 성별</div>
						<div className="item">
							<select id="join-select" style={{ width: '125px' }}>
								<option value="all">전체</option>
								<option value="google">구글 계정</option>
								<option value="google">남성</option>
								<option value="apple">여성</option>
							</select>
						</div>
					</div>
					<div className="container-item-bottom">
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
							<div className="frame-text-inner-box">
								<div className="frame-text-header">전체 누적 회원수</div>
								<div className="frame-text-number">4,612,619 명</div>
							</div>
							<div className="percentage">어제 보다 15% 올랐어요.</div>
						</div>
						<div className="type-box">
							<div className="join-header">가입 유형</div>
							<div className="join-box">
								<div className="type-box-row">
									<Google />
									<div>2,516,498 명</div>
								</div>
								<div className="type-box-row">
									<Apple />
									<div>2,516,498 명</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
			<div className="list-main">
				<div className="list-header">
					<p className="list-header-item">닉네임</p>
					<p className="list-header-item">계정 이메일</p>
					<p className="list-header-item">휴대번호</p>
					<p className="list-header-item">보유 포인트</p>
					<p className="list-header-item">누적 결제 금액</p>
					<p className="list-header-item">계좌 인증 여부</p>
					<p className="list-header-item">알림 받은 유저수</p>
					<p className="list-header-item">계정생성 일자</p>
					<p className="list-header-item">차단</p>
				</div>
				<div className="list-body">
					<div></div>
				</div>
			</div>
		</ContentLayout>
	);
}
