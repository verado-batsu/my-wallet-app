import { styled } from "styled-components";

export const Container = styled.div`
	box-sizing: border-box;
	margin: 0 auto;
	padding: 0 16px;

	@media screen and (min-width: 320px) {
		max-width: 320px;
	}

	@media screen and (min-width: 768px) {
		max-width: 768px;
		padding: 0 32px;
	}

	@media screen and (min-width: 1200px) {
		max-width: 1200px;
		padding: 0 100px;
	}
`

export const BodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`

export const Header = styled.header`
	padding: 10px 0;
	
	background-color: aquamarine;
`

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Main = styled.main`
	flex: 1;
`

export const MainWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
`

export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	padding: 15px 0;
	background-color: #dadada;

	a {
		font-size: 20px;
		color: #000;
		transition: color 250ms;

		&:hover,
		&:focus {
			color: #535bf2;
		}
	}
`

export const Logo = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
`