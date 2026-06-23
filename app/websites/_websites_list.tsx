"use client";

import { Button } from "@/composants/ui/Button";
import Website from "@/composants/ui/Website";
import { WebsiteType } from "@/types/website";

export default function WebsitesList({
  websites
}: {
  websites: WebsiteType[];
}) {
  return (
    <>
        <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
            {websites.map((w: WebsiteType, i: number) => (
                <Website key={`website-${i}`} website={w} />
            ))}
        </div>
        <footer className="pt-12 flex justify-center">
            <Button onClick={() => {}}>Charger plus de sites web</Button>
        </footer>
    </>
  );
}
