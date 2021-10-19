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
	baseURL: 'https://3.35.233.239',
	headers: {
		'Content-Type': 'application/json',
	},
});

//미들웨어
const getCartAPI = () => {
	return async function (dispatch, getState, { history }) {
		await instance
			.get('https://3.35.233.239/myPage')
			.then(reponse => {
				console.log(reponse);
			})
			.catch(error => {
				console.log(error, '장바구니 가져오기 에러');
			});
	};
};

//리듀서
export default handleActions(
	{
		[SET_CART]: (state, action) => produce(state, draft => {}),
	},
	initialState,
);
const actionCreators = {
	getCartAPI,
};

export { actionCreators };
