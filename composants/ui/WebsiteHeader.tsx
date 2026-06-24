"use client";

import { WebsiteDocument } from "@/prismicio-types";
import { asLink, isFilled } from "@prismicio/client";
import SiteMenu from "../layout/SiteMenu";
import Title from "./Title";
import { PrismicImage } from "@prismicio/react";
import Link from "next/link";
import { usePinsStore } from "@/store/pins";

type WebsiteHeaderType = {
  website: WebsiteDocument;
};
export default function WebsiteHeader({ website }: WebsiteHeaderType) {
  const { pins, addPin, removePin } = usePinsStore();

  return (
    <>
      <div className="px-6 py-12">
        <header className="text-center pb-12 flex flex-col gap-4">
          <time dateTime={website.first_publication_date}>
            {new Date(website.first_publication_date).toLocaleDateString(
              "fr-FR",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              },
            )}
          </time>
          <Title tag="h1">{website.data.title}</Title>
          <div className="flex justify-center gap-4">
            <span
              onClick={() =>
                pins.some((p) => p.uid === website.uid)
                  ? removePin(website)
                  : addPin(website)
              }
              className="material-symbols-outlined cursor-pointer"
            >
              {pins.some((p) => p.uid === website.uid) ? "keep_off" : "keep"}
            </span>

            {isFilled.link(website.data.weblink) && (
              <a href={asLink(website.data.weblink)!} target="_blank">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            )}
          </div>
        </header>
        <Link href={`/websites/${website.uid}`}>
          <PrismicImage field={website.data.img} className="rounded-lg" />
        </Link>
      </div>
      <SiteMenu slug={website.uid} />
    </>
  );
}
