import { styled } from "styled-components";

export const ConnectWalletButton = styled.button`
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
	}
`

export const UserWallet = styled.div`
	width: 100px;
	display: flex;
	gap: 10px;
`
export const WalletBalance = styled.span`
`

export const WalletAddress = styled.span`
`