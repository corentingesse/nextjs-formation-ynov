import { createClient } from "@/prismicio";

type MetadataType = "home" | "websites" | "contact" | "mentions";

export async function getMetadata(type: MetadataType) {
  const client = createClient();
  const page = await client.getSingle(type);
  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.meta_image],
    },
  };
}
