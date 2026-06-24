import { createClient } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("contact").catch(() => null);

  return {
    title: page?.data.meta_title || "Contact",
    description: page?.data.meta_description || "Contactez-nous pour toute question ou suggestion",
    openGraph: (() => {
      const img = page?.data.meta_image && asImageSrc(page.data.meta_image);
      return img ? { images: [{ url: img }] } : undefined;
    })(),
  };
}

export default function ContactPage() {
  return <main>ContactPage</main>;
}
