import React from 'react';
import styled from 'styled-components';

const Card = ({
	title,
	price,
	img,
	width,
	height,
	margin,
	priceSize,
	titleSize,
	center,
	color,
}) => {
	const styles = {
		width: width,
		height: height,
		margin: margin,
		center: center,
	};

	return (
		<Layout {...styles}>
			<Photo>
				<img alt="img" src={img} />
			</Photo>
			<TextLayout>
				<Subject titleSize={titleSize}>{title}</Subject>
				<Price priceSize={priceSize} color={color}>
					{price}
				</Price>
			</TextLayout>
		</Layout>
	);
};

Card.defaultProps = {
	width: '250px',
	height: '400px',
	margin: '0',
	priceSize: '1.2em',
	titleSize: '1em',
	center: false,
	color: 'black',
};

const Layout = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	margin: ${props => props.margin};
	text-align: ${props => (props.center ? 'center' : 'unset')};
	/* border: 1px solid gray; */
`;

const Photo = styled.div`
	height: 70%;

	img {
		width: 98%;
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
	font-size: ${props => props.titleSize};
	font-weight: normal;
`;

const Price = styled.p`
	font-size: ${props => props.priceSize};
	font-weight: bold;
	color: ${props => props.color};
`;

export default Card;
