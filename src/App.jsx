import {
    Container,
    Footer,
    Header,
    HeaderWrapper,
    Logo,
    Main,
    BodyContainer,
    MainWrapper,
} from './App.styled';
import logo from './assets/images/logo.jpg';

import { ConnectWallet } from './components/ConnectWallet/ConnectWallet';
import { TransferTokenForm } from './components/TransferTokenForm/TransferTokenForm';

function App() {
    return (
        <BodyContainer>
            <Header>
                <Container>
                    <HeaderWrapper>
                        <Logo src={logo} alt="Logo" />
                        <ConnectWallet />
                    </HeaderWrapper>
                </Container>
            </Header>
            <Main>
                <Container>
                    <MainWrapper>
                        <TransferTokenForm />
                    </MainWrapper>
                </Container>
            </Main>
            <Footer>
                <Container>
                    <a
                        href="https://github.com/verado-batsu/my-wallet-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub Repository
                    </a>
                </Container>
            </Footer>
        </BodyContainer>
    );
}

export default App;
