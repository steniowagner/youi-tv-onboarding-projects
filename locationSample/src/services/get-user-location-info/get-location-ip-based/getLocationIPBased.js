import parseIPStackResponse from './parseIPStackResponse';
import { getExternalUserIP } from './getExternalUserIP';

const IPSTACK_BASE_URL = 'http://api.ipstack.com';
const IPSTACK_API_KEY = '15d7f0ec7d4ac54792ff390189536f22';

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
