import { create } from 'zustand';

interface State {
	bears: string;
	setBears: (name: string) => void;
}

const useStore = create<State>((set) => ({
	bears: '회원 정보 관리',
	setBears: (name) => {
		set(() => ({ bears: name }));
	},
}));
export default useStore;
