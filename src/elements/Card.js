import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
	width: 250px;
	height: 400px;
	/* border: 1px solid gray; */
`;

const Photo = styled.div`
	height: 70%;

	img {
		width: 100%;
		height: 100%;
	}
`;

const TextLayout = styled.div`
	width: 90%;
	padding: 0.5em;

	p {
		margin: 0.5em;
	}
`;

const Subject = styled.p`
	font-size: 1em;
	font-weight: normal;
`;

const Price = styled.p`
	font-size: 1.2em;
	font-weight: bold;
`;

const Card = ({ title, price, img }) => {
	return (
		<Layout>
			<Photo>
				<img alt="img" src={img} />
			</Photo>
			<TextLayout>
				<Subject>{title}</Subject>
				<Price>{price}</Price>
			</TextLayout>
		</Layout>
	);
};

export default Card;
