// 리덕스

// 1.import
// 첫째,createAction와 handleActions는 Action과 리듀서를 편하게 만들어준다.
import { createAction, handleActions } from 'redux-actions';
// 둘째, immer를 가지고와야 불변성관리가 편하다.
import { produce } from 'immer';
import { api } from '../../shared/api';

// 2. actions(액션타입)
// 첫째, 로그아웃 정보를 가지고 온다.
const LOG_OUT = 'LOG_OUT';
// 둘째, 유저정보를 가져온다.
const SET_USER = 'SET_USER';

// 3. action creator(액션 생성 함수들)
// 첫째, createAction사용해서 LOG_IN타입을 넘겨준다. ()안에는 파라미터 값 즉 정보를 주고 user값을 넘겨준다.
const setUser = createAction(SET_USER, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));

// 4. initialState(초기값)을 잡아준다.
const initialState = {
	user: null,
	is_login: false,
};

// 회원가입
const signupAPI = (id, pw, email, name, passwordConfirm) => {
	return function (dispatch, getState, { history }) {
		window.alert('아이디', id);
		window.alert('비밀번호', pw);
		window.alert('비밀번호확인', passwordConfirm);
		window.alert('이름', name);
		window.alert('이메일', email);
		api
			.post('/users/signUp', {
				userid: id,
				password: pw,
				name: name,
				passwordConfirm: passwordConfirm,
				email: email,
			})
			.then(response => response.json())
			.then(result => {
				let dupMsg = result.message;
				if (dupMsg === 'emailfalse') {
					window.alert('이메일 중복확인을 해주세요.');
				} else if (dupMsg === 'usernamefalse') {
					window.alert('아이디 중복확인을 해주세요.');
				} else {
					window.alert('회원가입이 되었습니다!');
					history.push('/login');
				}
			});
	};
};

// 로그인
const loginAPI = (id, pw) => {
	return function (dispatch, getState, { history }) {
		api
			.post('/users/logIn', {
				userid: id,
				password: pw,
			})
			.then(result => {
				console.log(result);
				if (result.status === 200) {
					let token = result.headers.get('Authorization');
					let userInfo = result.headers.get('userInfo');
					userInfo = JSON.parse(userInfo);
					userInfo.name = decodeURI(atob(userInfo.name));
					localStorage.setItem('token', token);
					localStorage.setItem('userInfo', JSON.stringify(userInfo));
					dispatch(
						setUser({
							uid: userInfo.uid,
							name: userInfo.name,
						}),
					);
					history.push('/');
				} else {
					window.alert('로그인에 실패했습니다.');
				}
			})
			.catch(error => {
				console.log(error);
			});
	};
};

// 로그아웃
const logout = () => {
	return function (dispatch, getState, { history }) {
		localStorage.removeItem('token');
		localStorage.removeItem('userInfo');
		dispatch(logOut());
		history.replace('/');
	};
};

const isLogin = () => {
	return function (dispatch, getState, { history }) {
		const token = localStorage.getItem('token');
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));

		if (!token || !userInfo) {
			return false;
		}
		dispatch(
			setUser({
				uid: userInfo.uid,
				name: userInfo.name,
				address: userInfo.address,
			}),
		);
	};
};

// 5. reducer(리듀서)
export default handleActions(
	{
		[SET_USER]: (state, action) =>
			produce(state, draft => {
				draft.user = action.payload.user;
				draft.is_login = true;
			}),
		[LOG_OUT]: (state, action) =>
			produce(state, draft => {
				draft.user = null;
				draft.is_login = false;
			}),
	},
	initialState,
);

// 6. action creator export
// 액션생성함수를 내보낸다.
const actionCreators = {
	signupAPI,
	loginAPI,
	logout,
	isLogin,
};

export { actionCreators };
