import logo from '../../assets/logo.svg';
import logoFaleMais from '../../assets/LogoFaleMais.svg';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <a href="/"><img src={logo} alt="Tilzer" /></a>
                <img src={logoFaleMais} alt="FaleMais" />
            </Content>
        </Container>
    )
}