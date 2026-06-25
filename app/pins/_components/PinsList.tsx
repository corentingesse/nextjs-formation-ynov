"use client";

import Website from "@/composants/ui/Website";
import { usePinsStore } from "@/store/pins";

export default function PinsList() {
  const pins = usePinsStore((s) => s.pins);

  return (
    <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
      {pins.map((p, i) => (
        <Website key={`website-${i}`} website={p} />
      ))}
    </div>
  );
}
