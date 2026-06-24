import { ButtonLink } from "@/composants/ui/ButtonLink";
import Video from "@/composants/ui/Video";
import Title from "@/composants/ui/Title";
import Website from "@/composants/ui/Website";
import WebsiteHeader from "@/composants/ui/WebsiteHeader";
import { createClient } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getSingle("home").catch(() => null);

  return {
    title: home?.data.meta_title || "Accueil",
    description: home?.data.meta_description || "Découvrez les derniers sites web et partagez vos avis",
    openGraph: (() => {
      const img = home?.data.meta_image && asImageSrc(home.data.meta_image);
      return img ? { images: [{ url: img }] } : undefined;
    })(),
  };
}

export default async function HomePage() {
  const client = createClient();
  const websites = await client.getAllByType("website");

  const page = await client.getSingle("home");
  console.log("page: ", page);

  return (
    <main>
      <WebsiteHeader website={websites[0]} />

      <div className="bg-white px-6 py-12">
        <Title
          tag="h2"
          topLine="Voir les derniers"
          bottomLine="et ajoute tes propres reviews"
        >
          Sites web
        </Title>
        <div className="grid md:grid-cols-3 gap-4 pt-12">
          {websites
            .filter((_, i) => i > 0 && i <= 3)
            .map((w, i) => (
              <Website key={`website-${i}`} website={w} />
            ))}
        </div>
        <footer className="pt-12 flex justify-center">
          <ButtonLink href="/websites" variant="link">
            Voir tous les sites
          </ButtonLink>
        </footer>
      </div>

      <div className="bg-white px-6 py-12">
        <Title tag="h2" topLine="découvrez notre dernier">
          Highlight
        </Title>

        <Video id="414785329" />
      </div>
    </main>
  );
}
