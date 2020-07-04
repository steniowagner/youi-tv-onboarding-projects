import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import { UNSPLASH_ACCESS_KEY } from 'react-native-dotenv';
import styled from 'styled-components';

import ROUTE_NAMES from '../routes/route-names';
import api from '../../../../services/api';
import SearchInput from './SearchInput';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContentContainer = styled(View)`
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.getHeightFromDP('36%')}px;
  margin-bottom: ${({ theme }) => theme.metrics.getHeightFromDP('8%')}px;
`;

const SearchText = styled(Text)`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const SearchButton = styled(TouchableOpacity)`
  height: ${({ theme }) => theme.metrics.extraLargeSize}px;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.metrics.extraLargeSize}px;
  background-color: ${({ theme, withDisabledStyle }) => withDisabledStyle ? theme.colors.alphaPrimary : theme.colors.primary};
  border-radius: ${({ theme }) => theme.metrics.extraLargeSize / 2}px;
`;

const SearchButtonText = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.smallSize}px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
`;

const ErrorText = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.mediumSize}px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.error};
`;

class Search extends PureComponent {
  state = {
    isSearching: false,
    searchQuery: '',
    error: '',
  }

  onSearch = async () => {
    try {
      const { searchQuery } = this.state;

      const { data: { results }} = await api.get(`/search/photos?per_page=20&query=${searchQuery}&client_id=${UNSPLASH_ACCESS_KEY}`);

      if (!results.length) {
        this.setState({
          error: 'No results found for your search',
          isSearching: false,
        });

        return;
      }

      this.props.navigation.navigate(ROUTE_NAMES.RESULTS, {
        query: searchQuery,
        items: results,
      });
    } catch (err) {
      this.setState({
        error: 'An error occurred with your search'
      });
    }
  }

  onPressSearchButton = async () => {
    this.setState({
      isSearching: true,
    });

    await this.onSearch();
  }

  onTypeSearchQuery = searchQuery => {
    this.setState({
      searchQuery,
      error: '',
    });
  };

  render() {
    const { isSearching, searchQuery, error } = this.state;

    return (
      <Wrapper>
        <ContentContainer>
          <SearchText>UNS_Search</SearchText>
            <SearchInput
              onChangeText={this.onTypeSearchQuery}
              value={searchQuery}
            />
            <SearchButton
              disabled={!!error || !searchQuery || isSearching}
              withDisabledStyle={!searchQuery || isSearching}
              onPress={this.onPressSearchButton}
            >
              {isSearching
              ? <SearchButtonText>SEARCHING...</SearchButtonText>
              : <SearchButtonText>SEARCH</SearchButtonText>}
            </SearchButton>
        </ContentContainer>
        <ErrorText>{error}</ErrorText>
      </Wrapper>
    );
  }
}

export default Search;
 