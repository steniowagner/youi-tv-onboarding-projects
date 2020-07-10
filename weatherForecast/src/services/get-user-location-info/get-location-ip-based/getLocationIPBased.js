import { IPSTACK_API_KEY } from 'react-native-dotenv';

import parseIPStackResponse from './parseIPStackResponse';
import { getExternalUserIP } from './getExternalUserIP';

const IPSTACK_BASE_URL = 'http://api.ipstack.com';

const getLocationIPBased = async () => {
  const externalUserIP = await getExternalUserIP();

  if (!externalUserIP) {
    return undefined;
  }

  const result = await fetch(`${IPSTACK_BASE_URL}/${externalUserIP}?access_key=${IPSTACK_API_KEY}`);

  if (!result.ok) {
    return undefined;
  }

  const userLocationInfo = JSON.parse(result._bodyText);

  return parseIPStackResponse(userLocationInfo);
};

export default getLocationIPBased;
