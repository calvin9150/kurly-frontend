import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrap = styled.div`
	width: 100%;

	img {
		width: 100%;
	}
`;

const Event = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<>
			<Wrap>
				<Slider {...settings}>
					<div>
						<img alt="kurly1" src={require('../images/kurly1.png').default} />
					</div>
					<div>
						<img alt="kurly2" src={require('../images/kurly2.png').default} />
					</div>
					<div>
						<img alt="kurly3" src={require('../images/kurly3.png').default} />
					</div>
				</Slider>
			</Wrap>
		</>
	);
};

export default Event;
