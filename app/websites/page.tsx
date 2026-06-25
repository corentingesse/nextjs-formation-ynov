import Title from "@/composants/ui/Title";
import WebsitesList from "./_components/WebsitesList";
import { createClient } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("websites").catch(() => null);

  return {
    title: page?.data.meta_title || "Sites web",
    description: page?.data.meta_description || "Explorez notre collection de sites web reviewed par la communauté",
    openGraph: (() => {
      const img = page?.data.meta_image && asImageSrc(page.data.meta_image);
      return img ? { images: [{ url: img }] } : undefined;
    })(),
  };
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
