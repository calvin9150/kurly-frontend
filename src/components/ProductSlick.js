import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '../elements/Card';
import { actionCreators as productsActions } from '../redux/modules/product';

const Wrap = styled.div`
	width: 100%;
	margin: 0;
`;

function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				width: '50px',
				height: '50px',
				right: '-27px',
				top: '150px',
			}}
			onClick={onClick}
		>
			<img
				src={require('../images/arrow.png').default}
				alt="arrowNext"
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					right: '5px',
					top: '-10px',
					border: '1px solid rgb(197, 197, 197)',
					borderRadius: '50%',
				}}
			/>
		</div>
	);
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				width: '50px',
				height: '50px',
				right: '-27px',
				top: '150px',
				zIndex: '999',
			}}
			onClick={onClick}
		>
			<img
				src={require('../images/arrowL.png').default}
				alt="arrowNext"
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					left: '0px',
					top: '-10px',
					border: '1px solid rgb(197, 197, 197)',
					borderRadius: '50%',
				}}
			/>
		</div>
	);
}

const ProductSlick = () => {
	const dispatch = useDispatch();

	const productsList = useSelector(state => state.product.list);
	console.log('productsList');
	console.log(productsList);

	useEffect(() => {
		dispatch(productsActions.getProductsMiddleWare());
	}, [dispatch]);

	const settings = {
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<Wrap>
				<div style={{ textAlign: 'center', marginBottom: '2em' }}>
					<span style={{ fontSize: '1.8em', fontWeight: 'normal' }}>이 상품 어때요?</span>
				</div>
				<Slider {...settings}>
					{productsList?.map((v, i) => (
						<Card key={i} title={v.title} img={v.img} price={v.price} />
					))}
				</Slider>
			</Wrap>
		</>
	);
};

export default ProductSlick;
