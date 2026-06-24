import { create } from "zustand";
import { persist } from "zustand/middleware";

type PinStore = {
  pins: string[];
  addPin: (slug: string) => void;
  removePin: (slug: string) => void;
  togglePin: (slug: string) => void;
  isPinned: (slug: string) => boolean;
};

const usePin = create<PinStore>()(
  persist(
    (set, get) => ({
      pins: [],
      addPin: (slug) =>
        set((state) => ({
          pins: state.pins.includes(slug) ? state.pins : [...state.pins, slug],
        })),
      removePin: (slug) =>
        set((state) => ({
          pins: state.pins.filter((s) => s !== slug),
        })),
      togglePin: (slug) => {
        const { pins } = get();
        if (pins.includes(slug)) {
          set({ pins: pins.filter((s) => s !== slug) });
        } else {
          set({ pins: [...pins, slug] });
        }
      },
      isPinned: (slug) => get().pins.includes(slug),
    }),
    { name: "pins" },
  ),
);

export default usePin;