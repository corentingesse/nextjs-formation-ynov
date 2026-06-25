import Title from "@/composants/ui/Title";
import WebsitesList from "./_components/WebsitesList";
import { createClient } from "@/prismicio";
import { getMetadata } from "@/libs/metadata";

export async function generateStaticParams() {
  return getMetadata("websites");
}

export default async function WebsitesPage() {
  const client = createClient();
  // const websites = await client.getAllByType("website");

  const websites = await client.getByType("website", {
    pageSize: 2,
    page: 1,
  });

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      <WebsitesList websites={websites.results} />
    </main>
  );
}
