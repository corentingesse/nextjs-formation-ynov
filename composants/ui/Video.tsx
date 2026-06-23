"use client";

type VideoType = {
  src: string;
  type?: string;
};

export default function Video({ src, type = "video/mp4" }: VideoType) {
  return (
    <figure className="rounded-lg overflow-hidden w-full max-w-280 mt-12">
      <video controls preload="metadata" className="w-full">
        <source src={src} type={type} />
      </video>
    </figure>
  );
}
