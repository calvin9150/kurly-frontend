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
						<img
							alt="kurly1"
							src="https://firebasestorage.googleapis.com/v0/b/kurly-8cf7b.appspot.com/o/kurly1.png?alt=media&token=a40ee120-4994-41ca-918d-c7277d0e895d"
						/>
					</div>
					<div>
						<img
							alt="kurly2"
							src="https://firebasestorage.googleapis.com/v0/b/kurly-8cf7b.appspot.com/o/kurly2.png?alt=media&token=498f913f-1b9d-40cc-9518-42c2d9ceb652"
						/>
					</div>
					<div>
						<img
							alt="kurly3"
							src="https://firebasestorage.googleapis.com/v0/b/kurly-8cf7b.appspot.com/o/kurly3.png?alt=media&token=b4446447-164b-45cd-84d9-c3d375c74c85"
						/>
					</div>
				</Slider>
			</Wrap>
		</>
	);
};

export default Event;