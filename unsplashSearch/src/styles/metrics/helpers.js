import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

export const getWidthFromDP = widthPercentage => {
  const percentageDesired = parseFloat(widthPercentage);

  const widthPercentageToDP = PixelRatio.roundToNearestPixel(
    (width * percentageDesired) / 100,
  );

  return widthPercentageToDP;
};

export const getHeightFromDP = heightPercentage => {
  const percentageDesired = parseFloat(heightPercentage);

  const heightPercentageToDP = PixelRatio.roundToNearestPixel(
    (height * percentageDesired) / 100,
  );

  return heightPercentageToDP;
};

export default {
  getHeightFromDP,
  getWidthFromDP,
  height,
  width,
};