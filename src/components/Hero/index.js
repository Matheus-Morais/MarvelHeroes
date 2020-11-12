import React from 'react';

import {
    Container,
    Avatar,
    Title,
    Description
} from './styles';

export default function Hero({ item: hero }) {

    return (
        <Container>
            <Avatar source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }} resizeMode="contain" />
            <Title>{hero.name}</Title>
            {hero.description != '' &&
                <Description>{hero.description}</Description>
            }
        </Container>
    );
}
