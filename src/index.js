import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import './utils/Reactotron';

import Routes from './routes';

export default function Index() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#333" />
            <Routes />
        </>
    );
}
