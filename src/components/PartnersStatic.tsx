import React from "react";

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
    name: "Turun Kaupunki",
    homepageLink: new URL("https://www.turku.fi"),
    logo: "https://circhubs.fi/wp-content/uploads/2020/05/turku_vaaka_300ppi_cyan.png"
  },
  {
        name: "Digit ry",
        homepageLink: new URL("https://www.digit.fi"),
        logo: "https://digit.fi/digit.svg",
    },
    {
        name: "Asteriski ry",
        homepageLink: new URL("https://www.asteriski.fi"),
        logo: "https://asteriski.fi/wp-content/uploads/2022/06/asteriski-logo_1_33.png",
    }
];


export default function StaticPartnersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Partner */}
      <h2 className="text-5xl font-bold mb-4 text-center text-accent">
        Main Partner
      </h2>
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

      {/* Grid of Other Partners */}
      <h2 className="text-4xl font-bold mb-4 text-center text-accent">
        Other Partners
      </h2>
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
      <h2 className="text-3xl font-bold mb-4 text-center text-accent">
        Ecosystem
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
