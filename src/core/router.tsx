import { Route, Routes } from 'react-router-dom';
import { BlockPage } from '../pages/BlockPage';
import { MainBannerPage } from '../pages/MainBannerPage';
import ReportPage from '../pages/ReportPage';

import Test from '../pages/Test';

export default function Router() {
	return (
		<Routes>
			<Route path="/user" element={<Test />} />
			<Route path="/report" element={<ReportPage />} />
			<Route path="/block" element={<BlockPage />} />
			<Route path="/banner" element={<MainBannerPage />} />
		</Routes>
	);
}
