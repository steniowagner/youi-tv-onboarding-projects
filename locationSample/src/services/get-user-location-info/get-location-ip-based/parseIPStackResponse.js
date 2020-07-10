const parseIPStackResponse = ipStackResponse => ({
  city: ipStackResponse.city,
  state: ipStackResponse.region_name,
  country: ipStackResponse.country_name,
  continent: ipStackResponse.continent_name,
  latitude: ipStackResponse.latitude,
  longitude: ipStackResponse.longitude,
});

export default parseIPStackResponse;