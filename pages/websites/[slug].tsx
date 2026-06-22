import { WebsiteType } from "@/types/website";

export async function getStaticPaths() {
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );

  const paths = websites.map((w: WebsiteType) => ({
    params: { slug: w.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );

  const currentWebsite = websites.find((w: WebsiteType) => w.slug === slug);

  if (!currentWebsite) return { redirect: { destination: "/websites" } };

  console.log("currentWebsite=: ", currentWebsite);
  return {
    props: { website: currentWebsite },
  };
}

type WebsitePageType = {
  website: WebsiteType;
};

export default function WebsitePage({ website }: WebsitePageType) {
  console.log("website: ", website);
  return (
    website && (
      <div>
        <h1>{website.title}</h1>
      </div>
    )
  );
}
