import { styled } from "styled-components";

export const ModalContainer = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: rgba(0, 0, 0, 0.6);
`

export const ModalWrapper = styled.div`
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 200px;
	/* max-width: 600px; */
	padding: 40px 20px 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	border-radius: 8px;
	background-color: #fff;
`

export const ButtonClose = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	padding: 5px 10px;
	
	border-radius: 8px;
	border: none;
	background-color: transparent;

	transition: background-color 250ms, color 250ms;

	&:hover,
	&:focus {
		background-color: #fa443a;
		color: #fff;
	}
`

export const ModalTitle = styled.h2`
	font-size: 14px;
`

export const ModalLink = styled.a`
	padding: 5px 10px;

	text-align: center;
	border-radius: 8px;
	border: 1px solid;
	color: #000;
	background-color: #fff;

	transition: background-color 250ms, color 250ms;

	&:hover,
	&:focus {
		background-color: #535bf2;
		color: #fff;
	}
`

