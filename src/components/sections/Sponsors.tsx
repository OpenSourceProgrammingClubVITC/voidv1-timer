import SectionTitle from "../SectionTitle";
import { SponsorCard } from "../SponsorCard";

const SPONSORS = {
  gold: [
    {
      name: "Devfolio",
      href: "https://devfolio.co",
      logoSrc: "/Devfolio.svg",
    },
  ],
  silver: [
    {
      name: "EthIndia",
      href: "https://ethindia.co/",
      logoSrc: "/ethindia.svg",
    },
    {
      name: "Polygon",
      href: "https://polygon.technology/",
      logoSrc: "/polygon.jpg",
    },
    {
      name: ".xyz",
      href: "https://nic.xyz/",
      logoSrc: "/xyz-domains.jpeg",
    },
  ],
  bronze: [
    {
      name: "Chellam Hospital",
      href: "https://chellamhospital.com/",
      logoSrc: "/chellam-hospital.jpeg",
    },
  ],
} as const;

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="scroll-mt-32 container mx-auto px-6 py-10 md:py-10"
    >
      <SectionTitle>Sponsors</SectionTitle>
      {(["gold", "silver", "bronze"] as const).map((level) => {
        let levelBasedClassNames: string;
        switch (level) {
          case "gold":
            levelBasedClassNames = "text-yellow-400";
            break;
          case "silver":
            levelBasedClassNames = "text-gray-300";
            break;
          case "bronze":
            levelBasedClassNames = "text-amber-800";
            break;
        }

        return (
          <div className="text-center mb-12" key={level}>
            <h3 className={`text-2xl font-bold mb-6 ${levelBasedClassNames}`}>
              {level} Sponsor
            </h3>
            <div className="flex justify-center flex-row flex-wrap gap-8">
              {SPONSORS[level].map(({ name, href, logoSrc }) => {
                return (
                  <SponsorCard
                    level={level}
                    name={name}
                    href={href}
                    logoSrc={logoSrc}
                    key={name}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
