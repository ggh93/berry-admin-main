import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

interface Props {
	id: number;
	title: string;
	body: string;
}

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [limit, setLimit] = useState(20);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<Layout>
			{/* <div>
				<h1>게시물 목록</h1>
			</div>
			<label>
				<select
					typeof="number"
					value={limit}
					onChange={({ target: { value } }) => setLimit(Number(value))}
				>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
				</select>
			</label>
			<div>
				{posts.slice(offset, offset + limit).map(({ id, title, body }: Props) => (
					<article key={id}>
						<h3>
							{id}. {title}
						</h3>
						<p>{body}</p>
					</article>
				))}
			</div> */}
			<div>
				<Pagination page={page} setPage={setPage} limit={limit} total={posts.length} />
			</div>
		</Layout>
	);
}

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 800px;
	margin: 0 auto;
`;
