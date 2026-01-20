import citiesInfo from '../components/citiesInfo';

export function getCities() {
  // TODO: Replace with Supabase fetch
  return citiesInfo;
}

export function getCityBySlug(slug) {
  // TODO: Replace with Supabase fetch
  return citiesInfo.find((city) => city.slug === slug);
}
