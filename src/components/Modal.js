import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';

const Wrapper = styled.div`
	position: fixed;
	display: ${props => (props.visible ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	z-index: 999;
	background-color: rgba(44, 44, 44, 0.267);
	border-radius: 20px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	height: 270px;
	background-color: white;
	border-radius: 1em;
	padding: 30px;
`;

const TextLayout = styled.div`
	width: 100%;
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
	display: flex;
	justify-content: space-between;
`;

const PriceLayout = styled.div`
	width: 100%;
	height: 90px;
	margin-bottom: 20px;
`;

const PriceContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const PointInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: end;
	font-size: 0.8em;
`;

const Point = styled.div`
	margin: 0 10px;
	padding: 0 5px;
	font-weight: 100;
	background-color: orange;
	color: white;
	border-radius: 10px;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
`;

const Count = styled.div`
	display: flex;
	border: 1px solid rgba(44, 44, 44, 0.267);
	height: 27px;
	input {
		text-align: center;
		width: 27px;
		height: 25px;
		border: none;
		pointer-events: none;
	}
`;

const PlusMinusBtn = styled.button`
	border: none;
	height: 27px;
	width: 27px;
`;

const Modal = ({ children, visible }) => {
	return (
		<>
			<Wrapper visible={visible}>
				<Container>
					<TextLayout>
						<Subject>[서울만두] 고기교자</Subject>
						<Price>
							5,900원
							<Count className="count">
								<PlusMinusBtn
									onClick={() => {
										alert('hi');
									}}
								>
									-
								</PlusMinusBtn>
								<input readOnly value={15} />
								<PlusMinusBtn>+</PlusMinusBtn>
							</Count>
						</Price>
					</TextLayout>
					<PriceLayout>
						<PriceContent>
							<Subject>합계</Subject>
							<Price>5,900원</Price>
						</PriceContent>

						<PointInfo>
							<Point>적립</Point>로그인 후, 적립혜택 제공
						</PointInfo>
					</PriceLayout>
					<Buttons>
						<Button width={'47%'} bg={'white'} color={'black'}>
							취소
						</Button>
						<Button width={'47%'}>장바구니 담기</Button>
					</Buttons>
				</Container>
			</Wrapper>
		</>
	);
};

export default Modal;
