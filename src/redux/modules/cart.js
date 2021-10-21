import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { api } from '../../shared/api';

const ADD_CART = 'ADD_CART';
const LOADING = 'LOADING';
const SET_CART = 'SET_CART';

const addCart = createAction(ADD_CART, cart => ({
	cart,
}));
const setCart = createAction(SET_CART, cartList => ({ cartList }));
const loading = createAction(LOADING, isLoading => ({
	isLoading,
}));

const initialState = {
	list: [
		{
			title: '[올리타리아] 엑스트라 버진 올리브유',
			img: 'https://img-cf.kurly.com/shop/data/goods/1587519777879l0.jpg',
			price: 15000,
		},
	],
};

const addCardMiddleWare = (id, title, price, img, quantity) => {
	return (dispatch, { history }) => {
		console.log('장바구니비동기요청');
		console.log(id, title, price, img, quantity);
		dispatch(loading(true));
		api
			.post(`/carts/${id}`, {
				title,
				price,
				img,
				quantity,
			})
			.then(res => {
				// const products = res.data.post;
				// dispatch(addCart(products));
				dispatch(loading(false));
				alert('장바구니에 상품을 담았습니다!');
			})
			.catch(err => {
				console.log(err.response);
				if (err.response.statusText === 'Unauthorized') {
					alert('로그인 후 이용해주세요.');
					dispatch(loading(false));
					return;
				}
				alert(err.response.data.msg);
				dispatch(loading(false));
			});
	};
};

const getCartAPI = () => {
	return function (dispatch, getState, { history }) {
		api
			.get('list')
			.then(
				reponse => {
					console.log(reponse.data);
					dispatch(setCart(reponse.data));
				},

				// { withCredentials: true },
			)
			.catch(error => {
				console.log(error, '장바구니 가져오기 에러');
			});
	};
};

export default handleActions(
	{
		[ADD_CART]: (state, action) =>
			produce(state, draft => {
				draft.list = action.payload.cart;
				draft.isLoading = false;
			}),
		[LOADING]: (state, action) =>
			produce(state, draft => {
				draft.isLoading = action.payload.isLoading;
			}),
		[SET_CART]: (state, action) =>
			produce(state, draft => {
				draft.list = action.payload.cartList;
			}),
	},
	initialState,
);

const actionCreators = {
	addCardMiddleWare,
	getCartAPI,
};

export { actionCreators };
