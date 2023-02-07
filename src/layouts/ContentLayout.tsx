import { ReactNode, useState } from 'react';
import { useCategory, useSubCategory } from '../constants/store';
import CategoriesIcon from '../components/CategoryIcon';
import * as Icon from 'react-bootstrap-icons';
import ReactModal from 'react-modal';

interface Props {
	children: ReactNode;
}

export default function ContentLayout({ children }: Props) {
	const { categoryName } = useCategory();
	const { subCategoryName } = useSubCategory();

	const [modalOpen, setModalOpen] = useState(false);

	const MM = () => {
		return (
			<>
				<button onClick={() => setModalOpen(true)}>Modal open</button>
				<ReactModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
					This is modal
				</ReactModal>
			</>
		);
	};

	return (
		<div>
			<div className="main-header">
				<div style={{ display: 'flex' }}>
					{CategoriesIcon(categoryName)}
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div className="category font">{categoryName}</div>
						<div className="category font">/</div>
						<div className="category">{subCategoryName}</div>
					</div>
				</div>
				<div className="links">
					<button
						onClick={() => {
							console.log('1');
						}}
					>
						<Icon.PersonFill width="30px" height="30px" fill="white" className="admin" />
					</button>
					<MM />
				</div>
			</div>
			{children}
		</div>
	);
}
