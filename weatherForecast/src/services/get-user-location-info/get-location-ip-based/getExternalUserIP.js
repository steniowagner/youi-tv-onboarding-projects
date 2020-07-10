const IPIFY_BASE_URL = 'https://api.ipify.org/';

export const getExternalUserIP = async () => {
  const result = await fetch(IPIFY_BASE_URL);

  if (!result.ok) {
    return undefined;
  }

  return result._bodyInit;
};
