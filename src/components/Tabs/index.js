import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabsItem, TabsText } from './styles';

export default function Main({ translateY }) {
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: 'clamp'
            })
        }}>
            <TabsContainer>
                <TabsItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabsText>Indicar Amigos</TabsText>
                </TabsItem>
                <TabsItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabsText>Cobrar</TabsText>
                </TabsItem>
                <TabsItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <TabsText>Depositar</TabsText>
                </TabsItem>
                <TabsItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <TabsText>Transferir</TabsText>
                </TabsItem>
                <TabsItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabsText>Bloquear cartão</TabsText>
                </TabsItem>
            </TabsContainer>
        </Container>
    );
}