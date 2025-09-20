export type SponsorCardProps = {
  level: "gold" | "silver" | "bronze";
  name: string;
  href: string;
  logoSrc: string;
};

export function SponsorCard({ level, name, href, logoSrc }: SponsorCardProps) {
  let levelBasedClassNames;
  switch (level) {
    case "gold":
      levelBasedClassNames =
        "from-yellow-400/20 to-yellow-600/20 border-yellow-400/30";
      break;
    case "silver":
      levelBasedClassNames =
        "from-gray-400/20 to-gray-600/20 border-gray-400/30";
      break;
    case "bronze":
      levelBasedClassNames =
        "from-amber-200/15 to-amber-400/15 border-amber-300/20";
  }
  return (
    <div
      className={`p-6 bg-gradient-to-br  rounded-xl border  backdrop-blur-sm ${levelBasedClassNames}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={logoSrc}
          alt={`${name} logo`}
          className="w-auto h-32 rounded-lg shadow-lg bg-white p-4"
        />
      </a>
    </div>
  );
}
