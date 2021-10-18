import styled from 'styled-components';

import CardList from '../components/CardList';
import Event from '../components/Event';
import ProductSlick from '../components/ProductSlick';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	/* height: 100vh; */
`;

const ProductSlickLayout = styled.div`
	width: 53%;
	height: 500px;
	margin: 80px auto;
`;

const Main = () => {
	// const dispatch = useDispatch();

	return (
		<>
			<Container>
				<Event />
				<ProductSlickLayout>
					<ProductSlick />
				</ProductSlickLayout>
				<CardList />
			</Container>
		</>
	);
};

export default Main;
