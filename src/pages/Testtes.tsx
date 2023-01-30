import useStore from '../constants/store';

export default function Testtes() {
	const { bears } = useStore();
	return <div style={{ position: 'absolute' }}>{bears}</div>;
}
