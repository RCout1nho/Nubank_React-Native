import React from 'react';
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

import QRCode from 'react-native-qrcode-svg';

export default function Main({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Code>
                <QRCode
                    value="https://www.google.com.br"
                    size={80}
                    color="#8B10AE"
                    backgroundColor="#FFF"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configuração do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => { }}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}
