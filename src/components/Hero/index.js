import React from 'react';

import {
    Container,
    ContainerAvatar,
    ContainerInfo,
    Avatar,
    Title,
} from './styles';

export default function Hero({ item: hero }) {

    return (
        <Container>
            <ContainerAvatar>
                <Avatar source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }} resizeMode="contain" />
            </ContainerAvatar>

            <ContainerInfo>
                <Title>{hero.name}</Title>
            </ContainerInfo>
        </Container>
    );
}
