// // user.js

// // 1. import를 한다.
// // 첫째,createAction와 handleActions는 Action과 리듀서를 편하게 만들어준다.
// import { createAction, handleActions } from 'redux-actions';
// // 둘째, immer를 가지고와야 불변성관리가 편하다.
// import { produce } from 'immer';

// // 2. actions(액션타입)
// // 첫째, 로그아웃 정보를 가지고 온다.
// const LOG_OUT = 'LOG_OUT';
// // 둘째, 유저정보를 가져온다.
// const SET_USER = 'SET_USER';

// // 3. action creator(액션 생성 함수들) > 액션생성함수를 선언해준 이유는 나중에 기능구현에서 이 함수들을 사용하기 위함이다.
// // 첫째, createAction사용해서 LOG_IN타입을 넘겨준다. ()안에는 파라미터 값 즉 정보를 주고 user값을 넘겨준다.
// // const logIn = createAction(LOG_IN, (user) => ({ user }));
// const logOut = createAction(LOG_OUT, user => ({ user }));
// const setUser = createAction(SET_USER, user => ({ user }));

// // 4. initialState(초기값)을 잡아준다.
// const initialState = {
// 	// 첫째, 로그인을 안한상태기 때문에 null(아직 사용자가 없기 때문에 로그인정보 없음)
// 	user: [],
// 	// 둘째, 웹사이트 뜨자마 아직 아무것도 안되어 있기때문에 false
// 	is_login: false,
// };

// // 6. action creator export
// // 액션생성함수를 내보낸다.
// const actionCreators = {};

// // export를 통해 밖에서도 사용할 수 있도록 설정해 둔다.
// export { actionCreators };
