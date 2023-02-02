import { create } from 'zustand';

interface State {
	categoryName: string;
	setCategoryName: (name: string) => void;
}
interface SubState {
	subCategoryName: string;
	setSubCategoryName: (name: string) => void;
}

export const useCategory = create<State>((set) => ({
	categoryName: '회원',
	setCategoryName: (name) => {
		set(() => ({ categoryName: name }));
	},
}));

export const useSubCategory = create<SubState>((set) => ({
	subCategoryName: '회원 정보 관리',
	setSubCategoryName: (name) => {
		set(() => ({ subCategoryName: name }));
	},
}));
