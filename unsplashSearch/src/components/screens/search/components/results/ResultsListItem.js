import React, { Fragment } from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

import Tag from './Tag';

const Wrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('12%')}px;
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  margin-right: ${({ theme }) => theme.metrics.smallSize}px;
  overflow: hidden;
  border-radius: 4px;
`

const ImageFrame = styled(Image)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('20%')}px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const TextContentWrapper = styled(View)`
  width: 100%;
  padding: ${({ theme }) => theme.metrics.smallSize}px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: white;
`;

const TagsWrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`

const DescriptionText = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.extraSmallSize * 1.6}px;
  color: rgba(0, 0, 0, 0.6);
`
const SectionTitleText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  font-size: ${({ theme }) => theme.metrics.smallSize}px;
  color: rgba(0, 0, 0, 0.8);
`;

const SectionDivider = styled(View)`
  width: 100%;
  height: 0.5px;
  margin-vertical: ${({ theme }) => theme.metrics.smallSize}px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const ResultListItem = ({ description, image, tags }) => (
  <Wrapper>
    <ImageFrame
      source={{ uri: image }}
    />
    <TextContentWrapper>
      {description && (
        <Fragment>
          <SectionTitleText>About</SectionTitleText>
          <DescriptionText>{description}</DescriptionText>
          <SectionDivider />
        </Fragment>
      )}
      {tags.length && (
        <Fragment>
          <SectionTitleText>Tags</SectionTitleText>
          <TagsWrapper>
            {tags.map(item => (
              <Tag name={item} key={item} />
            ))}
          </TagsWrapper>
        </Fragment>
      )}
    </TextContentWrapper>
  </Wrapper>
);

export default ResultListItem;