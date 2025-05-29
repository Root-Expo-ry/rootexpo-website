import React from "react";
import SubTitle from "./SubTitle.astro";

export interface Partner {
  name: string;
  logo: string;
  homepageLink: URL;
}

const mainPartner: Partner = {
    name: "Reaktor",
    homepageLink: new URL("https://www.reaktor.com"),
    logo: "/partnerLogos/reaktor_white.svg",
};
const partners: Partner[] = [
    {
        name: "Wapice",
        homepageLink: new URL("https://wapice.com"),
        logo: "/partnerLogos/wapice.webp",
    },
    {
        name: "Visma",
        homepageLink: new URL("https://www.visma.fi"),
        logo: "/partnerLogos/visma_white.png",
    },
];

const ecosystem: Partner[] = [
  {
    name: "Turun kaupunki",
    homepageLink: new URL("https://www.turku.fi"),
    logo: "/partnerLogos/turku.png"
  },
  {
      name: "Digit ry",
      homepageLink: new URL("https://www.digit.fi"),
      logo: "/partnerLogos/digit.svg",
  },
  {
      name: "Asteriski ry",
      homepageLink: new URL("https://www.asteriski.fi"),
      logo: "/partnerLogos/Asteriski.png",
  },
  {
    name: "Trade ry",
    homepageLink: new URL("https://tradery.fi"),
    logo: "/partnerLogos/trade.svg",
  },
  {
    name: "Asklepio ry",
    homepageLink: new URL("https://asklepio.fi"),
    logo: "/partnerLogos/asklepio.svg",
  },
  {
    name: "TuKYData ry",
    homepageLink: new URL("https://www.tuky.fi/etusivu/ainejarjestot/tukydata/"),
    logo: "/partnerLogos/tukydata.svg",
  },
];


export default function StaticPartnersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Partner */}
      <h5 className="text-center">
        MAIN PARTNER
      </h5>
      <section className="mb-10 flex justify-center">
        <a
          href={mainPartner.homepageLink.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="inline-flex items-center p-4 bg-transparent transition-shadow duration-300 hover:shadow-2xl">
            <span className="flex h-36 w-72 items-center justify-center">
              <img
                src={mainPartner.logo}
                className="max-w-full max-h-full"
              />
            </span>
          </div>
        </a>
      </section>

      {/* Grid of Partners */}
      <h5 className="text-center">
        PARTNERS
      </h5>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {partners.map((partner) => (
            <a
              href={partner.homepageLink.toString()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center gap-4 p-4 bg-transparent hover:shadow-md transition-all duration-300">
                <span className="flex h-24 w-48 items-center justify-center p-2">
                  <img
                    src={partner.logo}
                    className="max-w-full max-h-full"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <h2 className="text-center">
        ECOSYSTEM
      </h2>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ecosystem.map((eco) => (
            <a
              href={eco.homepageLink.toString()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center gap-4 p-4 bg-transparent hover:shadow-md transition-all duration-300">
                <span className="flex h-24 w-48 items-center justify-center p-2">
                  <img
                    src={eco.logo}
                    className="max-w-full max-h-full"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
