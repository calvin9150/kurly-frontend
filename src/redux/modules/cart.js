import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

//액션
const SET_CART = 'SET_CART';

//액션함수
const setCart = createAction(SET_CART, cartList => ({ cartList }));

//초기값
const initialState = {
	list: [],
};

//axios
const instance = axios.create({
	baseURL: ' http://localhost:4000',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json',
	},
});

//미들웨어
const getCartAPI = () => {
	return function (dispatch, getState, { history }) {
		instance
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

//리듀서
export default handleActions(
	{
		[SET_CART]: (state, action) =>
			produce(state, draft => {
				draft.list = action.payload.cartList;
			}),
	},
	initialState,
);
const actionCreators = {
	getCartAPI,
};

export { actionCreators };