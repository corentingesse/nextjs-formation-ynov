import fetchWebsites from './fetchWebsites';

export default async function fetchWebsiteData(slug: string) {
  const websites = await fetchWebsites();
  return websites.find((website: { slug: string }) => website.slug === slug);
}