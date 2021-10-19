// Signup.js

// import를 한다.
import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Button } from '../elements/index';

// Signup 함수형 컴포넌트를 만든다.
const Signup = props => {
	return (
		<React.Fragment>
			<SignupWrap>
				<Text bold size="30px">
					회원가입
				</Text>
				<RightWrap>
					<Text size="12px" color="#666666">
						<CheckSpan>*</CheckSpan>필수입력사항
					</Text>
				</RightWrap>
				<Line />
				<SignTable>
					<tbody>
						<tr>
							<td>
								아이디<CheckSpan>*</CheckSpan>
							</td>
							<td>
								<Grid flex width="460px">
									<Input
										placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
										padding="14px"
										width="332px"
									/>
									<Button
										size="14px"
										bg="#ffffff"
										color="#5f0080"
										width="120px"
										padding="11px 14px"
									>
										중복확인
									</Button>
								</Grid>
								<InfoUl className="checkId">
									<li>· 6자 이상의 영문 혹은 영문과 숫자를 조합</li>
									<li>· 아이디 중복확인</li>
								</InfoUl>
							</td>
						</tr>
						<tr>
							<td>
								비밀번호<CheckSpan>*</CheckSpan>
							</td>
							<td>
								<Grid flex>
									<Input
										placeholder="비밀번호를 입력해주세요"
										type="password"
										padding="14px"
										width="332px"
									/>
								</Grid>
								<InfoUl className="checkPw">
									<li>·10글자 이상 입력</li>
									<li>·영문/숫자/특수문자(공백 제외)만 허용,2개 이상의 조합</li>
									<li>·동일한 숫자 3개 이상 연속 사용 불가</li>
								</InfoUl>
							</td>
						</tr>
						<tr>
							<td>
								비밀번호확인<CheckSpan>*</CheckSpan>
							</td>
							<td>
								<Grid flex>
									<Input
										placeholder="비밀번호를 한번 더 입력해주세요"
										type="password"
										padding="14px"
										width="332px"
									/>
								</Grid>
								<InfoUl className="ReCheckPw">
									<li>·동일한 비밀번호를 입력해주세요.</li>
								</InfoUl>
							</td>
						</tr>
						<tr>
							<td>
								이름<CheckSpan>*</CheckSpan>
							</td>
							<td>
								<Grid>
									<Input placeholder="이름을 입력해주세요" padding="14px" width="332px" />
								</Grid>
							</td>
						</tr>
						<tr>
							<td>
								이메일<CheckSpan>*</CheckSpan>
							</td>
							<td>
								<Grid flex width="460px">
									<Input placeholder="예: marketkurly@kurly.com" padding="14px" width="332px" />
									<Button
										size="14px"
										bg="#ffffff"
										color="#5f0080"
										width="120px"
										padding="11px 14px"
									>
										중복확인
									</Button>
								</Grid>
							</td>
						</tr>
						<tr>
							<td>
								주소<CheckSpan>*</CheckSpan>
							</td>
							<td>
								<Grid flex>
									<Input placeholder="주소를 입력해주세요" padding="14px" width="332px" />
								</Grid>
							</td>
						</tr>
					</tbody>
				</SignTable>
				<Button width="240px">가입하기</Button>
			</SignupWrap>
		</React.Fragment>
	);
};

// styled-components를 사용한다.
const SignupWrap = styled.div`
	width: 640px;
	display: flex;
	align-items: center;
	margin: 0 auto;
	justify-content: center;
	flex-direction: column;
	padding: 64px 0px 120px 0px;
`;

const CheckSpan = styled.span`
	color: #ee6a7b;
`;

const Line = styled.span`
	display: block;
	width: 100%;
	height: 2px;
	background-color: #333333;
	margin-top: 10px;
`;

const RightWrap = styled.div`
	text-align: right;
	width: 100%;
	margin: 23px 0px 0px 0px;
`;

const SignTable = styled.table`
	margin-top: 15px;
	padding-bottom: 49px;
	width: 100%;
	& tr {
		text-align: left;
		font-size: 14px;
		font-weight: 500;
	}
	& td {
		position: relative;
		padding-bottom: 16px;
	}
	& td:nth-child(1) {
		box-sizing: border-box;
		padding: 15px 0px 0px 18px;
		width: 152px;
		vertical-align: top;
	}
`;
const InfoUl = styled.ul`
	font-size: 12px;
	color: #666666;
	position: relative;
	left: -40px;
	font-weight: 400;
	list-style: none;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정해 둔다.
export default Signup;
