import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page que vous cherchez n'existe pas",
};

export default function Error404Page() {
  return <div>Error404Page</div>;
}
