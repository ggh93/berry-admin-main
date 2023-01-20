import { Fa500Px } from 'react-icons/fa';
import { IoSearchCircle } from 'react-icons/io5';
import styled from '@emotion/styled';
import Button from './Button';

const Header = styled.header`
	box-sizing: border-box;
	background: lightgray;
	height: 215px;
`;
const Main = styled.main`
	background: #f0f0f0;
	min-height: 700px;
`;
const Footer = styled.footer`
	background: darkgray;
	height: 315px;
`;
const AppBox = styled.div`
	overflow: hidden;
	min-width: 1180px;
`;
const Box = styled.div`
	display: flex;
	align-items: center;
`;
const Link = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;
const LinkText = styled.a`
	font-size: 12px;
	margin-left: 5px;
`;
const Nav = styled.nav``;
const NavItem = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 15px;
	font-weight: bold;
	border-top: 1px solid #f1f3f6;
`;

const SearchBox = styled.div`
	display: 'flex';
	align-items: center;
`;

export default function App() {
	return (
		<>
			<Header>
				<Link className="links">
					<LinkText href="/" className="link_text">
						네이버를 시작페이지로
					</LinkText>
					<LinkText href="/" className="link_text">
						쥬니어네이버
					</LinkText>
					<LinkText href="/" className="link_text">
						해피빈
					</LinkText>
				</Link>
				<SearchBox className="search_box">
					<form>
						<Button onClick={() => {}}>
							<Fa500Px style={{ display: 'inherit' }} />
							NAVER
						</Button>
						<input type="text" maxLength={225} tabIndex={1} />
						<button type="submit" tabIndex={2}>
							검색
						</button>
					</form>
				</SearchBox>
				<Nav>
					<NavItem className="nav_items">
						<ul>
							<li>
								<a href="/">메일</a>
							</li>
							<li>
								<a href="/">카페</a>
							</li>
							<li>
								<a href="/">블로그</a>
							</li>
							<li>
								<a href="/">지식iN</a>
							</li>
							<li>
								<a href="/">쇼핑</a>
							</li>
							<li>
								<a href="/">Pay</a>
							</li>
							<li>
								<a href="/">TV</a>
							</li>
							<li>
								<a href="/">사전</a>
							</li>
							<li>
								<a href="/">뉴스</a>
							</li>
							<li>
								<a href="/">증권</a>
							</li>
							<li>
								<a href="/">부동산</a>
							</li>
							<li>
								<a href="/">지도</a>
							</li>
							<li>
								<a href="/">영화</a>
							</li>
							<li>
								<a href="/">뮤직</a>
							</li>
							<li>
								<a href="/">책</a>
							</li>
							<li>
								<a href="/">웹툰</a>
							</li>
							<li>
								<a href="/">더보기</a>
							</li>
						</ul>
					</NavItem>
					<div className="keyword">
						<span className="color_naver">1</span>
					</div>
				</Nav>
			</Header>
			<Main>메인</Main>
			<Footer>하단</Footer>
		</>
	);
}
