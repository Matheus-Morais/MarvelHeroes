import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get("window");

export const Container = styled.View`
    justify-content: center;
    align-items: center;

    margin-top: ${height * 0.05}px;
    margin-bottom: ${height * 0.05}px;
`;

export const Info = styled.Text`
    font-size: ${width * 0.04}px;
    font-weight: bold;
    color: #000;
    text-align: center;
`;
