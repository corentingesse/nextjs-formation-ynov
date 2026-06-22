import Image from 'next/image'
import Link from 'next/link'
import { WebsiteType } from '@/types/Website'

export default function Website({
  WebsiteData: {
    slug,
    title,
    thumbnail
  }}: { WebsiteData: WebsiteType }) {
  return (
    <Link href={`/websites/${slug}`} className="w-full h-full">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-1/2 bg-gray-200 flex items-center justify-center">
          <Image src={`/next-files/websites/${thumbnail}`} alt={title} width={500} height={300} className="max-w-full max-h-full object-cover" />
        </div>
        <div className="w-full h-1/2 p-4">
          <h4 className="text-2xl font-bold mb-4">{title}</h4>
        </div>
      </div>
    </Link>
  )
}