import { WebsiteType } from "@/types/website";

export default function Website({
  website: { title, thumbnail },
}: {
  website: WebsiteType;
}) {
  return (
    <article>
      <h3>{title}</h3> <img src={`/websites/${thumbnail}`} />
    </article>
  );
}
