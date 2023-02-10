import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

interface Props {
	text: string | undefined;
	setText: (name: string) => void;
	placeholder: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBox({ text, setText, placeholder, onChange }: Props) {
	// The input will lose focus after 3 seconds

	return (
		<div className="search-header">
			<div className="search-box">
				<Icon.Search className="search-icon" />
				<input
					id="sampleText"
					className="search-text"
					placeholder={placeholder}
					type="text"
					onChange={onChange}
					value={text}
				/>
			</div>
			<div style={{ display: 'flex', color: '#4d69ff', alignContent: 'center' }}>
				<label htmlFor="arrow" className="arrow-text">
					초기화
				</label>
				<button id="arrow" onClick={() => setText('')}>
					<Icon.ArrowRepeat className="arrow-icon" />
				</button>
			</div>
		</div>
	);
}
