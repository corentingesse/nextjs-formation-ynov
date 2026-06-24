import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type HeadingProps = SliceComponentProps<Content.HeadingSlice>;

const Heading: FC<HeadingProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 px-6"
    >
      {slice.primary.image && (
        <PrismicNextImage field={slice.primary.image} className="w-full max-w-2xl mx-auto" />
      )}
      {slice.primary.title && (
        <h2 className="text-3xl font-bold mt-4">{slice.primary.title}</h2>
      )}
      {slice.primary.date && (
        <p className="text-gray-500 mt-2">{slice.primary.date}</p>
      )}
    </section>
  );
};

export default Heading;
