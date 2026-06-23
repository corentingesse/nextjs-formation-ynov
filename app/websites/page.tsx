import Title from "@/composants/ui/Title";
import WebsitesList from "./_websites_list";

async function getWebsites() {
  const res = await fetch("http://localhost:3000/websites.json");
  if (!res.ok) {
    throw new Error("Failed to fetch websites");
  }
  return res.json();
}

export default async function WebsitesPage() {
  const websites = await getWebsites();

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      <WebsitesList websites={websites} />
    </main>
  );
}
