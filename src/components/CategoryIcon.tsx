import * as Icon from 'react-bootstrap-icons';

export default function CategoryIcon(name: string) {
	switch (name) {
		case '회원':
			return <Icon.PersonFill className="main-header-icon" />;
		case 'Home':
			return <Icon.HouseFill className="main-header-icon" />;
		case 'Shop':
			return <Icon.Basket3 className="main-header-icon" />;
		case '소셜':
			return <Icon.Heart className="main-header-icon" />;
		case '왓치':
			return <Icon.PlayBtn className="main-header-icon" />;
		case '이벤트':
			return <Icon.Gift className="main-header-icon" />;
		case '고객응대':
			return <Icon.MegaphoneFill className="main-header-icon" />;
		default:
			return <Icon.PersonFill className="main-header-icon" />;
	}
}
