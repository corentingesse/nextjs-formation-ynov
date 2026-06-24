import Mentions from "@/public/mentions.mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Next Formation",
};

export default function MentionsPage() {
  return (
    <main>
      <h1>Mentions</h1>
      <Mentions />
    </main>
  );
}
