export default async function fetchWebsites() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/next-files/websites.json`);
  const websites = await response.json();
  return websites;
}