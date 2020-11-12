import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get("window");

export const Container = styled.View`
    background: #f0f0f0;

    justify-content: center;
    align-items: center;

    padding: 5px;

    margin-bottom: 15px;
`;

export const Avatar = styled.Image`
    width: ${height * 0.2}px;
    height: ${height * 0.2}px;
    border-radius: ${height * 0.02}px;
`;

export const Title = styled.Text`
    font-size: ${width * 0.04}px;
    font-weight: bold;
    color: #000;
    text-align: center;
`;

export const Description = styled.Text`
    font-size: ${width * 0.04}px;
    color: #000;
    text-align: center;
`;
