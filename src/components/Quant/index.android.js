import React from 'react';
import { View, Text } from 'react-native';

import {
    Container,
    Info
} from './styles';

export default function Quant({ quant }) {
    return (
        <Container>
            <Info>Total de {quant} super-heróis</Info>
        </Container>
    );
}
