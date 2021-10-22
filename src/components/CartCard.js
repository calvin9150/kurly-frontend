import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { priceUnit } from '../shared/common';
import { actionCreators as cartActions } from '../redux/modules/cart';

const CartCard = props => {
	const [count, setCount] = useState(1);
	// const originalPrice = props.productCount;
	const dispatch = useDispatch();

	const cart_list = useSelector(state => state.cart.cart_list);

	function min() {
		if (count > 0) {
			setCount(count - 1);
		} else alert('그만하라고');
	}

	return (
		<React.Fragment>
			{cart_list.map(e => {
				return (
					<CartBox key={e._id}>
						<img src={e.img} width="60px" height="78px" />
						<TitleBox>
							<h4>{e.title}</h4>
						</TitleBox>
						<h3>{e.quantity}</h3>
						<CountBox>
							<CountBtn onClick={() => setCount({ count: e.quantity + 1 })}>+</CountBtn>
							<CountBtn onClick={() => min()}>-</CountBtn>
						</CountBox>
						<h4>{e.price * e.quantity}원</h4>
						<DeleteBtn
							onClick={() => {
								console.log(e.postId);
								dispatch(cartActions.deleteCartMddleWares(e.postId));
							}}
						/>
					</CartBox>
				);
			})}
		</React.Fragment>
	);
};
export default CartCard;

const CartBox = styled.div`
	display: flex;
	height: 150px;
	align-items: center;
	gap: 10px;
	margin-left: -10px;
	border-bottom: 1px solid #eaeaea;
	padding: 0px 30px;
	& h4 {
		font-size: 16px;
		font-weight: 400;
	}
`;

const TitleBox = styled.div`
	width: 285px;
	text-align: left;
	margin-left: 12px;
`;

const CountBox = styled.div`
	margin: 0px 50px;
	border: 1px solid lightgray;
	border-radius: 4px;
	overflow: hidden;
	width: 82px;
	height: 26px;
	display: flex;
	width: 50px;
	height: 20px;
`;

const CountBtn = styled.button`
	width: 28px;
	height: 22px;
	background-color: white;
	font-size: 18px;
	position: relative;
	top: -3px;
	border: none;
	outline: none;
	cursor: pointer;
`;

const DeleteBtn = styled.button`
	background-image: url('https://res.kurly.com/pc/service/cart/2007/ico_delete.svg');
	background-position: 50% 50%;
	background-color: #ffffff;
	outline: none;
	border: none;
	width: 30px;
	height: 30px;
	cursor: pointer;
`;
