import { styled } from "styled-components";

export const ConnectWalletButton = styled.button`
	padding: 10px 20px;

	border-radius: 25px;
	border: 1px solid #000;
	background-color: transparent;

	font-size: 16px;

	transition: background-color 250ms, color 250ms;

	&:hover,
	&:focus {
		background-color: #535bf2;
		color: #fff;
	}
`

export const UserWallet = styled.div`
	display: flex;
	gap: 10px;
	padding: 10px 20px;

	border-radius: 25px;
	border: 1px solid;
`
export const WalletBalance = styled.span`
`

export const WalletAddress = styled.span`
`