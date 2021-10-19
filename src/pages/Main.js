import styled from 'styled-components';
import Bargain from '../components/Bargain';

// import CardList from '../components/CardList';
import Event from '../components/Event';
import Modal from '../components/Modal';
import ProductSlick from '../components/ProductSlick';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-width: 1050px;
	overflow: hidden;
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
			<Modal />
			<Container>
				<Event />
				<ProductSlickLayout>
					<ProductSlick />
				</ProductSlickLayout>
				<Bargain />
				{/* <CardList /> */}
			</Container>
		</>
	);
};

export default Main;
