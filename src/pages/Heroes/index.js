import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import md5 from 'md5';

import Hero from '../../components/Hero';

import api from '../../service/api';

import {
    Container,
    List,
    ContainerLoading,
    Loading
} from './styles';

export default function Heroes() {

    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(true)

    async function getHeroes() {
        setLoading(true)

        //Ts e hash para enviar a solicitação
        let ts = 1
        let hash = md5(`${ts}${'29cd61407eb4fb9816a1f638275743698786dab3'}${'e7501e8d4fcde60d7ff61baa795132fe'}`)

        let response
        try {
            response = await api.get(`/public/characters?nameStartsWith=a&ts=${ts}&apikey=e7501e8d4fcde60d7ff61baa795132fe&hash=${hash}`)
        } catch (error) {
            Alert.alert('Oppss!', 'Não foi possível recuperar os dados do servidor da Marvel.')
            setLoading(false)
            return
        }

        setHeroes(response.data.data.results)
        setLoading(false)
        return
    }

    useEffect(() => {
        getHeroes()
    }, [])

    return (
        <Container>
            {loading ?
                <ContainerLoading>
                    <Loading size="large" color="#333" />
                </ContainerLoading> :
                <List
                    data={heroes}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <Hero item={item} />
                    )}
                />
            }
        </Container>
    );
}
