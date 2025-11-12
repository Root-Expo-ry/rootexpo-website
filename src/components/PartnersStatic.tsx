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
    name: "Accenture",
    homepageLink: new URL("https://www.accenture.com"),
    logo: "/partnerLogos/accenture.png"
  },

  {
    name: "CGI",
    homepageLink: new URL("https://www.cgi.com/fi/fi"),
    logo: "/partnerLogos/cgi_white.png",
  },
  {
    name: "Kongsberg",
    homepageLink: new URL("https://www.kongsberg.com"),
    logo: "/partnerLogos/kongsberg_white.png",
  },
  {
    name: "Sitowise",
    homepageLink: new URL("https://www.sitowise.com"),
    logo: "/partnerLogos/sitowise.png"
  },
  {
    name: "Terveystalo",
    homepageLink: new URL("https://www.terveystalo.com"),
    logo: "/partnerLogos/terveystalo_white.svg",
  },
  {
    name: "Visma",
    homepageLink: new URL("https://www.visma.fi"),
    logo: "/partnerLogos/visma_white.png",
  },
  {
    name: "Wapice",
    homepageLink: new URL("https://wapice.com"),
    logo: "/partnerLogos/wapice-logo.webp",
  },
  {
    name: "TEK ry",
    homepageLink: new URL("https://www.tek.fi"),
    logo: "/partnerLogos/TEK_logo.png",
  },
  {
    name: "Twoday",
    homepageLink: new URL("https://www.twoday.fi"),
    logo: "/partnerLogos/twoday.png",
  },
  {
    name: "Teleste",
    homepageLink: new URL("https://www.teleste.com"),
    logo: "/partnerLogos/Teleste_white.png",
  },
  {
    name: "Sanoma Media",
    homepageLink: new URL("https://www.sanoma.fi"),
    logo: "/partnerLogos/sanoma_white.png",
  },
  {
    name: "Lounea",
    homepageLink: new URL("https://www.lounea.fi"),
    logo: "/partnerLogos/lounea_valkoinen.png",
  },
  {
    name: "GE HealthCare",
    homepageLink: new URL("https://www.gehealthcare.fi"),
    logo: "/partnerLogos/GE_HealthCare.png",
  }
];

const supporting: Partner[] = [
  {
    name: "Turun kaupunki",
    homepageLink: new URL("https://www.turku.fi"),
    logo: "/partnerLogos/turku.png"
  },
  {
    name: "Purje-hanke",
    homepageLink: new URL("https://www.ely-keskus.fi/purje-hanke"),
    logo: "/partnerLogos/Purje_logo_white.png",
  },
  {
    name: "EU",
    homepageLink: new URL("https://europa.eu"),
    logo: "/partnerLogos/EU_Co_Outline.png",
  },
  {
    name: "Turku Audio",
    homepageLink: new URL("https://turkuaudio.fi"),
    logo: "/partnerLogos/turku-audio-white.png",
  },
  {
    name: "Mankeli Solutions Oy",
    homepageLink: new URL("https://mankelisolutions.fi"),
    logo: "/partnerLogos/mankeli.svg",
  }
];

const ecosystem: Partner[] = [

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
    logo: "/partnerLogos/asklepio-logo.webp",
  },
  {
    name: "TuKYData ry",
    homepageLink: new URL("https://www.tuky.fi/etusivu/ainejarjestot/tukydata/"),
    logo: "/partnerLogos/tukydata.svg",
  },
  {
    name: "Skrolli",
    homepageLink: new URL("https://www.skrolli.fi"),
    logo: "/partnerLogos/Skrolli.svg",
  },
  {
    name: "Aamuset",
    homepageLink: new URL("https://aamuset.fi"),
    logo: "/partnerLogos/aamuset.png",
  },
  {
    name: "TIO ry",
    homepageLink: new URL("https://tio.fi"),
    logo: "/partnerLogos/TIO_logo_white.png",
  }
];


export default function StaticPartnersPage() {
  return (
    <div className="container mx-auto px-6">
      {/* Main Partner */}
      <h5 className="text-center text-accent">
        MAIN PARTNER:
      </h5>
      <section className="mb-10 justify-center bg-container rounded-lg py-4 px-4 shadow-root-card">
        <a
          href={mainPartner.homepageLink.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex flex-col items-center gap-4 p-4">
            <span className="flex h-24 w-36 items-center justify-center">
              <img
                src={mainPartner.logo}
                className="max-w-full max-h-full filter brightness-0 invert"
              />
            </span>
          </div>
        </a>
      </section>

      {/* Grid of Partners */}
      <h5 className="text-center text-accent">
        PARTNERS:
      </h5>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-8 bg-container rounded-lg py-4 px-4 shadow-root-card">
          {partners.map((partner) => (
            <a
              href={partner.homepageLink.toString()}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-4">
                <span className="flex h-24 w-36 items-center justify-center">
                  <img
                    src={partner.logo}
                    className="max-w-full max-h-full filter brightness-0 invert"


                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <h5 className="text-center text-accent">
        SUPPORTING PARTNERS:
      </h5>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-8 bg-container rounded-lg py-4 px-4 shadow-root-card">
          {supporting.map((support) => (
            <a
              href={support.homepageLink.toString()}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-4">
                <span className="flex h-24 w-36 items-center justify-center">
                  <img
                    src={support.logo}
                    className="max-w-full max-h-full filter brightness-0 invert"


                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <h5 className="text-center text-accent">
        ECOSYSTEM:
      </h5>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 bg-container rounded-lg py-4 px-4 shadow-root-card">
          {ecosystem.map((eco) => (
            <a
              href={eco.homepageLink.toString()}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-4">
                <span className="flex h-24 w-36 items-center justify-center">
                  <img
                    src={eco.logo}
                    className="max-w-full max-h-full filter brightness-0 invert"
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
