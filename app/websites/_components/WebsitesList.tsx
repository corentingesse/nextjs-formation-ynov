"use client";

import { Button } from "@/composants/ui/Button";
import Website from "@/composants/ui/Website";
import { WebsiteDocument } from "@/prismicio-types";

type WebsitesListType = {
  websites: WebsiteDocument[];
};
export default function WebsitesList({ websites }: WebsitesListType) {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
        {websites.map((w, i) => (
          <Website key={`website-${i}`} website={w} />
        ))}
      </div>
      <footer className="pt-12 flex justify-center">
        <Button onClick={() => {}}>Charger plus de sites web</Button>
      </footer>
    </>
  );
}
