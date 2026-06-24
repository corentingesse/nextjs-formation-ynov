import { WebsiteDocument } from "@/prismicio-types";
import Image from "next/image";
import Link from "next/link";

export default function Website({
  website: {
    uid,
    data: { title, img },
  },
}: {
  website: WebsiteDocument;
}) {
  return (
    <Link href={`websites/${uid}`}>
      <div className="relative">
        {img.url && (
          <Image
            src={img.url}
            alt={img.alt || `Image ${title}`}
            width={img.dimensions?.width || 900}
            height={img.dimensions?.height || 600}
            className="rounded-lg"
          />
        )}
        <h3 className="mt-4">{title}</h3>
      </div>
    </Link>
  );
}
