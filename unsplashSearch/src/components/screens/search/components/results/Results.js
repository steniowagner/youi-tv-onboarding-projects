import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components';

import ResultsListItem from './ResultsListItem';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-vertical: ${({  theme }) => theme.metrics.mediumSize}px;
  background-color: ${({ theme }) => theme.colors.background}
`;

const ResultsForText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  color: ${({ theme }) => theme.colors.text};
`;

const Results = ({ navigation }) => {
  const { state: { params: { items, query } }} = navigation;

  const getTags = item => {
    console.log(item)
    if (!item.tags) {
      return [];
    }

    return item.tags.map(({ title }) => title)
  };

  return (
    <Wrapper>
      <FlatList
        ListHeaderComponent={() => <ResultsForText>Results for: {query}</ResultsForText>}
        renderItem={({ item }) => (
          <ResultsListItem
            description={item.description}
            image={item.urls.small}
            tags={getTags(item)}
          />
        )}
        keyExtractor={({ id }) => id}
        numColumns={4}
        data={items}
      />
    </Wrapper>
  )
};

export default Results;