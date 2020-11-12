import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import md5 from 'md5';

import Hero from '../../components/Hero';
import Quant from '../../components/Quant';

import api from '../../service/api';

import {
    Container,
    List,
    ContainerLoading,
    Loading,
    LoadingMoreDateItem
} from './styles';

export default function Heroes() {

    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(true)

    const [count, setCount] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [loadingMoreData, setLoadingMoreData] = useState(false);

    async function getHeroes() {
        setLoading(true)

        //Ts e hash para enviar a solicitação
        let ts = 1
        let hash = md5(`${ts}${'29cd61407eb4fb9816a1f638275743698786dab3'}${'e7501e8d4fcde60d7ff61baa795132fe'}`)

        let response
        try {
            response = await api.get(`/public/characters?nameStartsWith=a&ts=${ts}&apikey=e7501e8d4fcde60d7ff61baa795132fe&hash=${hash}&limit=${20}&offset=${0}`)
        } catch (error) {
            Alert.alert('Oppss!', 'Não foi possível recuperar os dados do servidor da Marvel.')
            setLoading(false)
            return
        }

        setCount(response.data.data.count)
        setTotalResults(response.data.data.total)
        setHeroes(response.data.data.results)
        setLoading(false)
        return
    }

    async function loadingMoreHeroes() {
        //verifica se ja existe ma solicitação
        if (loadingMoreData) {
            return;
        }

        //Verifica se ja foi atingido a méta
        if (totalResults > 0 && heroes.length === totalResults) {
            return
        }

        setLoadingMoreData(true)

        //Ts e hash para enviar a solicitação
        let ts = 1
        let hash = md5(`${ts}${'29cd61407eb4fb9816a1f638275743698786dab3'}${'e7501e8d4fcde60d7ff61baa795132fe'}`)

        let response
        try {
            response = await api.get(`/public/characters?nameStartsWith=a&ts=${ts}&apikey=e7501e8d4fcde60d7ff61baa795132fe&hash=${hash}&limit=${20}&offset=${count}`)
        } catch (error) {
            Alert.alert('Oppss!', 'Não foi possível recuperar mais dados do servidor da Marvel.')
            setLoadingMoreData(false)
            return
        }

        setCount(count + response.data.data.count)
        // setTotalResults(response.data.data.total)
        setHeroes([...heroes, ...response.data.data.results])
        setLoadingMoreData(false)
        return
    }

    function renderFooter() {
        if (!loadingMoreData || heroes.length === totalResults) {
            return (
                <Quant quant={count} />
            )
        } else {
            return <LoadingMoreDateItem><Loading size="small" color="#000" /></LoadingMoreDateItem>
        }

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
                    refreshing={loading}
                    onRefresh={getHeroes}
                    onEndReached={loadingMoreHeroes}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={renderFooter}
                    renderItem={({ item }) => (
                        <Hero item={item} />
                    )}
                />
            }
        </Container>
    );
}
