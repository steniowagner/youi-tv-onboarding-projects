import { PermissionsAndroid } from 'react-native';

const checkPermissionAlreadyGranted = async () => {
  const isPermissionAlreadyGranted = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  return isPermissionAlreadyGranted;
};

const requestLocationPermission = async () => {
  const isLocationPermissionGranted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'WeatherApp Location Permission',
      message:
        'WeatherApp needs access to your Location so you can see the weather forecast for your current location.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );

  return isLocationPermissionGranted;
};

const handleAndroidLocationPermission = async () => {
  try {
    const isLocationPermissionGranted = await requestLocationPermission();

    if (isLocationPermissionGranted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('true')
      return true;
    }
    console.log('false')

    return false;
  } catch(err) {
    console.error('handleAndroidLocationPermission', err);
    return false;
  }
};

export default handleAndroidLocationPermission;