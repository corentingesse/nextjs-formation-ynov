import WebsiteHeader from "@/composants/ui/WebsiteHeader";
import { WebsiteType } from "@/types/website";
import { notFound } from "next/navigation";

async function getWebsites() {
  const res = await fetch("http://localhost:3000/websites.json");
  if (!res.ok) {
    throw new Error("Failed to fetch websites");
  }
  return res.json();
}

async function getWebsite(slug: string) {
  const websites = await getWebsites();
  const currentWebsite = websites.find((w: WebsiteType) => w.slug === slug);
  return currentWebsite;
}

export default async function WebsitePage({ params }: { params: { slug: string } }) {
  const website = await getWebsite(params.slug);

  if (!website) {
    notFound();
  }

  return (
    <main>
      <WebsiteHeader website={website} />
    </main>
  );
}
