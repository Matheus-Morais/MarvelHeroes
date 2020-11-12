import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    width: 100%;
`;

export const ContainerLoading = styled.View`
    height: 100%;
    justify-content: center;
`;

export const Loading = styled.ActivityIndicator``;

export const LoadingMoreDateItem = styled.View`
    height: 50px;

    justify-content: center;
    align-items: center;
`;
