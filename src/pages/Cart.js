import produce from 'immer';
import { curry } from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from 'redux-actions';
import styled from 'styled-components';
import CartCard from '../components/CartCard';
import { Text, Button } from '../elements/index';
import { history } from '../redux/configureStore';
import { pryaiceUnit } from '../shared/common';
import { actionCreators as cartActions } from '../redux/modules/cart';

const Cart = props => {
	const dispatch = useDispatch();
	// const user_info = useSelector(state => state.user.user);
	const cart_list = useSelector(state => state.cart.list);
	console.log(cart_list);
	//장바구니 총구매(뱌송비 제외)
	// let total_price = cart_list
	// 	.map(c => c.producePrice * c.produceCount)
	// 	.reduce((acc, curry) => acc + curry, 0);

	//기본배송비 유뮤
	// total_price >10000 ? 0 : total_price+3000;
	useEffect(() => {
		dispatch(cartActions.getCartAPI());
	}, []);
	return (
		<>
			<div>
				<TitleBox>
					<Title>장바구니</Title>

					<DeleteUl>
						<li>전체상품 10개</li>
					</DeleteUl>
				</TitleBox>
				<ContentBox>
					{/* 상품담는  박스 */}
					<CartBox>
						<CartCard cart_list={cart_list} />
					</CartBox>
					;{/* 옆에 박스 */}
					<div>
						<OrderBox>
							<AddressBox>
								<AdressIcon src="https://res.kurly.com/pc/service/cart/2007/ico_location.svg" />
								<span className="address">배송지</span>
								<Text margin="7px">{/* {user_info?.address} */}</Text>
								<Text size="14px" color="#5f0080">
									샛별배송
								</Text>
								<InputBox>
									<span>배송지 변경</span>
								</InputBox>
							</AddressBox>
							{/* 가격 */}
							<PriceBox>
								<ProductPriceBox>
									<Text>상품금액</Text>
									<Text>가격자리 원</Text>
								</ProductPriceBox>
								<ProductPriceBox>
									<Text>결제예정금액</Text>
									<Text>
										<TotalPrice>총합 자리</TotalPrice> 원
									</Text>
								</ProductPriceBox>

								{/* 적립 */}

								<SaveMoneyBox>
									<SaveMoney>적립</SaveMoney>
									<MoneyInfo>구매 시 0원 적립</MoneyInfo>
								</SaveMoneyBox>
							</PriceBox>
						</OrderBox>
						<OrderInfoBox>
							<Button
								margin="25px 0px"
								_onClick={() => {
									alert('주문이 완료되었습니다.');
									history.push('/');
								}}
							>
								주문하기
							</Button>
							<Info>
								<li>· '입금확인' 상태일 때는 주문 내역 상세에서 직접 주문취</li>
								<li>소가 가능합니다.</li>
								<li>· '입금확인' 이후 상태에는 고객센터로 문의해주세요.</li>
							</Info>
						</OrderInfoBox>
					</div>
				</ContentBox>
			</div>
		</>
	);
};

export default Cart;

const Title = styled.div`
	text-align: center;
	font-size: 30px;
	font-weight: 600;
`;

const ContentBox = styled.div`
	display: flex;
	margin-left: 200px;
	height: 100vh;
`;

const CartBox = styled.div`
	width: 742px;
	border-top: 1px solid #333;
	padding-left: 9px;
	line-height: 20px;
	box-sizing: content-box;
	margin: 10px;
	font-size: 14px;
	text-align: center;
	font-weight: 500;
`;

const NoneCart = styled.p`
	margin-top: 150px;
`;

const OrderBox = styled.div`
	padding: 0px;
	width: 285px;
	border: 1px solid #f2f2f2;
	position: relative;
	top: 10px;
	left: 10px;
`;

const AddressBox = styled.div`
	border-bottom: 1px solid #f2f2f2;
	padding: 20px;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 500;
	& p {
		margin: 7px 0px 0px 0px;
	}
`;

const AdressIcon = styled.img`
	height: 20px;
	position: relative;
	top: 5px;
`;

const InputBox = styled.div`
	border: 1px solid purple;
	margin: 17px 0px 0px;
	border-radius: 5px;
	height: 36px;
	width: 244px;
	text-align: center;
	line-height: 33px;
	font-size: 12px;
	color: purple;
	position: relative;
	z-index: 2;
	cursor: pointer;
`;

const PriceBox = styled.div`
	background-color: #f8f9fa;
	font-size: 16px;
	padding: 30px 0px;
`;

const ProductPriceBox = styled.div`
	display: flex;
	height: 35px;
	justify-content: space-between;
	padding: 0px 20px;
	font-size: 16px;
	color: #4c4c4c;
`;

const TotalPrice = styled.span`
	font-size: 22px;
	color: #4c4c4c;
	font-weight: 500;
`;

const SaveMoneyBox = styled.div`
	text-align: right;
	padding: 0px 18px 0px 0px;
`;

const SaveMoney = styled.span`
	font-size: 10px;
	display: inline-block;
	padding: 1px 8px;
	color: #ffffff;
	font-weight: 500;
	border-radius: 12px;
	border: 1px solid #f7965f;
	text-align: center;
	background-color: #ffbf00;
	vertical-align: middle;
	position: relative;
	right: 5px;
	top: -1px;
`;
const MoneyInfo = styled.span`
	font-size: 12px;
	color: #666666;
`;

const TitleBox = styled.div`
	padding: 55px 0px;
`;

const DeleteUl = styled.ul`
	display: flex;
	font-size: 14px;
	position: relative;
	left: -30px;
	top: 60px;
	gap: 15px;
	margin-left: 220px;
`;

const OrderInfoBox = styled.div`
	width: 285px;
	position: relative;
	left: 12px;
`;

const Info = styled.ul`
	font-size: 12px;
	margin: 0px;
	padding: 0px;
	color: #666666;
	& li:nth-child(2) {
		padding-left: 12px;
	}
	& li:nth-child(3) {
		margin-top: 10px;
	}
`;
