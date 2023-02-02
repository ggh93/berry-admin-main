import { ReactNode } from 'react';
import { useCategory, useSubCategory } from '../constants/store';
import categoryIcon from '../constants/categoryIcon';

interface Props {
	children: ReactNode;
}

export default function ContentLayout({ children }: Props) {
	const { categoryName } = useCategory();
	const { subCategoryName } = useSubCategory();
	return (
		<div>
			<div className="main-header">
				{categoryIcon(categoryName)}
				<div style={{ display: 'flex' }}>
					<div className="category font">{categoryName}</div>
					<div className="category font">/</div>
					<div className="category">{subCategoryName}</div>
				</div>
			</div>
			{children}
		</div>
	);
}
