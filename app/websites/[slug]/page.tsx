import WebsiteHeader from "@/composants/ui/WebsiteHeader";
import { createClient } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import ImagesSlice from "@/slices/ImagesSlice";
import TextSlice from "@/slices/TextSlice";
import VideoSlide from "@/slices/VideoSlide";
import { SliceZone } from "@prismicio/react";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = createClient();
  const website = await client.getByUID("website", slug).catch(() => null);

  if (!website) return { title: slug };

  return {
    title: website.data.meta_title || website.data.title || slug,
    description: website.data.meta_description || `Découvrez le site web ${slug}`,
    openGraph: (() => {
      const img = website.data.meta_image && asImageSrc(website.data.meta_image);
      return img ? { images: [{ url: img }] } : undefined;
    })(),
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const websites = await client.getAllByType("website");

  return websites.map((w) => ({
    slug: w.uid,
  }));
}

export default async function WebsitePage({ params }: Props) {
  const { slug } = await params;
  const client = createClient();
  const website = await client.getByUID("website", slug);

  if (!website) redirect("/websites");

  return (
    <main>
      {website && <WebsiteHeader website={website} />}
      <SliceZone
        slices={website.data.slices}
        components={{
          text_slice: TextSlice,
          images_slice: ImagesSlice,
          video_slide: VideoSlide,
        }}
      />
    </main>
  );
}
