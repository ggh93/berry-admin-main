import styled from '@emotion/styled';

export const EmotionBox = styled.div`
	background-color: yellow;
	font-size: 20px;
	width: 100px;
	padding: 20px;
	margin: 20px;
	border: 1px solid black;
	border-radius: 4px;
	text-align: center;
	display: ${(props: { display: string }) => props.display};
	&:hover {
		background-color: orange;
	}
`;
export const EmotionBox1 = styled.div`
	background-color: yellow;
	font-size: 20px;
	width: 100px;
	padding: 20px;
	margin: 20px;
	border: 1px solid black;
	border-radius: 4px;
	text-align: center;
	display: ${(props: { display?: string }) => props.display ?? 'flex'};
	&:hover {
		background-color: orange;
	}
`;
export const EmotionBox2 = styled.div({
	backgroundColor: 'red',
	width: '100px',
	padding: '20px',
});
export const Emotion1Button = EmotionBox1.withComponent('button');
export const EmotionButton = EmotionBox2.withComponent('button');
