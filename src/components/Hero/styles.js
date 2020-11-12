import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get("window");

export const Container = styled.View`
    background: #f0f0f0;

    flex-direction: row;

    justify-content: space-evenly;
    align-items: center;

    padding: 5px;
    margin-bottom: 7px;
    margin-top: 7px;

    border-width: 0.7px;
`;

export const ContainerAvatar = styled.View`
    width: ${width * 0.35}px;
    height: ${height * 0.2}px;
`;

export const Avatar = styled.Image`
    width: ${width * 0.35}px;
    height: ${height * 0.2}px;
    border-radius: ${width * 0.02}px;
`;

export const ContainerInfo = styled.View`
    width: ${width * 0.65}px;
    height: ${height * 0.2}px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${width * 0.04}px;
    font-weight: bold;
    color: #000;
    text-align: center;
`;
