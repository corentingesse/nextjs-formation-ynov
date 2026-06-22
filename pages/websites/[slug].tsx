import Image from 'next/image'
import fetchWebsiteData from '../../libs/websites/fetchWebsiteData'
import { WebsiteType } from '@/types/Website'

// params
export async function getServerSideProps({ params }: { params: { slug: string } }) {
  // Simulate fetching website data based on the slug
  const website = await fetchWebsiteData(params.slug);

  if (!website) {
    return {
      redirect: {
        destination: '/websites',
        permanent: false,
      },
    };
  }

    return {
        props: {
            ...website       
        }
    };
}

export default function WebsitePage({
    slug,
    title,
    description,
    thumbnail,
    date
  }: WebsiteType) {
  return (
    <>
        <div className="w-full h-full flex flex-col">
            <p className="text-4xl font-bold mb-8">{date}</p>
            <h1 className="text-4xl font-bold mb-8">{title}</h1>
        </div>

        <div className="w-full h-full flex flex-col">
            <div className="w-full h-1/2 bg-gray-200 flex items-center justify-center">
            <Image src={`/next-files/websites/${thumbnail}`} alt={title} width={500} height={300} className="max-w-full max-h-full object-cover" />
            </div>
            <div className="w-full h-1/2 p-4">
            <h4 className="text-2xl font-bold mb-4">{description}</h4>
            </div>
        </div>
    </>
  )
}