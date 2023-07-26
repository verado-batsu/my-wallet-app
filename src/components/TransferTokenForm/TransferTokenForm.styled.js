import { styled } from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;

	padding: 20px 10px;
	

	border-radius: 8px;
	border: 1px solid;

	@media screen and (min-width: 768px) {
		padding: 40px 20px;
		width: 400px;
	}
`

export const Label = styled.label`
	display: flex;
	flex-direction: column;
`

export const Input = styled.input`
	padding: 10px 15px;

	border-radius: 8px;
	border: ${(props) => {
		if (props.$isError) {
			return '1px solid red'
		} else {
			return '1px solid'
		}
	}};

	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
`

export const Button = styled.button`
	display: flex;
	justify-content: center;
	padding: 10px 15px;

	border-radius: 8px;
	border: 1px solid;
	background-color: #fff;

	font-size: 16px;

	transition: background-color 250ms, color 250ms;

	&:hover,
	&:focus {
		background-color: #535bf2;
		color: #fff;

		.loader{
			stroke: #fff;
		}
	}

	@media screen and (min-width: 768px) {
		font-size: 24px;
	}
`

export const ErrorMessage = styled.p`
	color: red;
`