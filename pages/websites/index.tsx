import Website from '@/components/ui/website/website'
import { WebsiteType } from "@/types/Website";

export default function WebsitesPage({ websites }: { websites: WebsiteType[] }) {
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Websites</h1>
        <p className="text-lg text-gray-600">Explore a curated collection of websites showcasing innovative design, functionality, and user experience. Each website is a testament to creativity and technical excellence, offering inspiration for your next project.</p>
      </div>

      <div className="w-full h-full flex flex-wrap items-center justify-center gap-8">
        {websites.map((website) => (
          <Website key={website.slug} WebsiteData={website} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const websites = await fetch('http://localhost:3000/next-files/websites.json').then((res) => res.json());
  return {
    props: { websites }
  };
}
