import { Container } from "./styles";
import logo from '../../assets/logo.svg';

export function Footer(){
    return(
        <Container>
            <a href="/"><img src={logo} alt="Tilzer" /></a>
            <p>Copyright 2021 © Telzir S.A</p>
        </Container>
    )
}