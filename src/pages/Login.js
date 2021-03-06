// Login.js

// import를 한다.
import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Button } from '../elements/index';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

// Login 함수형 컴포넌트를 만든다.
const Login = props => {
	const dispatch = useDispatch();

	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const login = (id, pw) => {
		if (id === '' || pw === '') {
			alert('아이디 혹은 비밀번호 오류입니다.');
			return false;
		}

		dispatch(userActions.loginAPI(id, pw));
	};

	const onChangeId = e => {
		setId(e.target.value);
	};

	const onChangePw = e => {
		setPw(e.target.value);
	};

	return (
		<React.Fragment>
			<LoginWrap>
				<Text size="20px" bold margin="0px 0px 30px 0px">
					로그인
				</Text>
				<Input placeholder="아이디를 입력해주세요" onChange={onChangeId} />
				<Input
					placeholder="비밀번호를 입력해주세요"
					type="password"
					margin="10px 0px"
					onChange={onChangePw}
				/>
				<Grid flex width="340px" margin="-15px 0px 0px 0px">
					<Grid flex>
						<input type="checkbox" name="check" />
						<Text size="13px">보안접속</Text>
					</Grid>
					<Grid>
						<FindIdPw>
							<FindLi>아이디찾기</FindLi>
							<FindLi>비밀번호 찾기</FindLi>
						</FindIdPw>
					</Grid>
				</Grid>
				<Button
					margin="17px 0px 0px 0px"
					onClick={() => {
						login(id, pw);
					}}
				>
					로그인
				</Button>
				<Button
					margin="10px"
					bg="#ffffff"
					color="#5f0080"
					onClick={() => {
						history.push('/signup');
					}}
				>
					회원가입
				</Button>
			</LoginWrap>
		</React.Fragment>
	);
};

// styled-components를 사용한다.
const LoginWrap = styled.div`
	width: 340px;
	margin: 0px auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 90px 0px 120px 0px;
`;

const FindIdPw = styled.ul`
	font-size: 13px;
	display: flex;
	gap: 5px;
	& li:nth-child(1)::after {
		content: '|';
		font-size: 6px;
		font-weight: 600;
		margin-left: 5px;
		position: relative;
		top: -2px;
	}
`;

const FindLi = styled.li`
	list-style: none;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정해 둔다.
export default Login;
