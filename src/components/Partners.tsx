import React from "react";
import { InfiniteScroll } from "./InfiniteScroll";

interface PartnersProps {
    scrollDirection?: "normal" | "reverse";
    partnersGroup: string;
}

const Partners: React.FC<PartnersProps> = ({scrollDirection = "normal", partnersGroup = "0"}) => {

    interface Partner {
        name: string;
        homepageLink: URL;
        logo: string;
    }

    const partnersData0: { description: string; partners: Partner[] } = {
        description: "We are proud to be partnered with these amazing companies.",
        partners: [
            {
                name: "Astro",
                homepageLink: new URL("https://astro.build"),
                logo: "https://astro.build/logo.svg",
            },
            {
                name: "Vercel",
                homepageLink: new URL("https://vercel.com"),
                logo: "https://vercel.com/logo.svg",
            },
            {
                name: "Netlify",
                homepageLink: new URL("https://netlify.com"),
                logo: "https://netlify.com/logo.svg",
            },
            {
                name: "GitHub",
                homepageLink: new URL("https://github.com"),
                logo: "",
            },
            {
                name: "GitLab",
                homepageLink: new URL("https://gitlab.com"),
                logo: "",
            },
            {
                name: "Bitbucket",
                homepageLink: new URL("https://bitbucket.org"),
                logo: "",
            },
            {
                name: "Heroku",
                homepageLink: new URL("https://heroku.com"),
                logo: "",
            },
            {
                name: "DigitalOcean",
                homepageLink: new URL("https://digitalocean.com"),
                logo: "",
            },
            {
                name: "AWS",
                homepageLink: new URL("https://aws.amazon.com"),
                logo: "",
            },
            {
                name: "Azure",
                homepageLink: new URL("https://azure.microsoft.com"),
                logo: "",
            },
            {
                name: "Google Cloud",
                homepageLink: new URL("https://cloud.google.com"),
                logo: "",
            },
            {
                name: "Firebase",
                homepageLink: new URL("https://firebase.google.com"),
                logo: "",
            },
            {
                name: "MongoDB",
                homepageLink: new URL("https://mongodb.com"),
                logo: "",
            },
            {
                name: "Mankeli Solutions",
                homepageLink: new URL("https://www.mankelisolutions.fi"),
                logo: "https://www.mankelisolutions.fi/_astro/logo_small.98b0fcb3_TNajB.webp",
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
        ],
    };

    const partnersData1: { description: string; partners: Partner[] } = {
        description: "We are proud to be partnered with these amazing companies.",
        partners: [
            {
                name: "Bastro",
                homepageLink: new URL("https://astro.build"),
                logo: "https://astro.build/logo.svg",
            },
            {
                name: "Bercel",
                homepageLink: new URL("https://vercel.com"),
                logo: "https://vercel.com/logo.svg",
            },
            {
                name: "Betlify",
                homepageLink: new URL("https://netlify.com"),
                logo: "https://netlify.com/logo.svg",
            },
            {
                name: "BitHub",
                homepageLink: new URL("https://github.com"),
                logo: "",
            },
            {
                name: "BitLab",
                homepageLink: new URL("https://gitlab.com"),
                logo: "",
            },
            {
                name: "Citbucket",
                homepageLink: new URL("https://bitbucket.org"),
                logo: "",
            },
            {
                name: "Beroku",
                homepageLink: new URL("https://heroku.com"),
                logo: "",
            },
            {
                name: "BigitalOcean",
                homepageLink: new URL("https://digitalocean.com"),
                logo: "",
            },
            {
                name: "BWS",
                homepageLink: new URL("https://aws.amazon.com"),
                logo: "",
            },
            {
                name: "Bzure",
                homepageLink: new URL("https://azure.microsoft.com"),
                logo: "",
            },
            {
                name: "Boogle Cloud",
                homepageLink: new URL("https://cloud.google.com"),
                logo: "",
            },
            {
                name: "Birebase",
                homepageLink: new URL("https://firebase.google.com"),
                logo: "",
            },
            {
                name: "BongoDB",
                homepageLink: new URL("https://mongodb.com"),
                logo: "",
            },
            {
                name: "Bankeli Solutions",
                homepageLink: new URL("https://www.mankelisolutions.fi"),
                logo: "https://www.mankelisolutions.fi/_astro/logo_small.98b0fcb3_TNajB.webp",
            },
            {
                name: "Bigit ry",
                homepageLink: new URL("https://www.digit.fi"),
                logo: "https://digit.fi/digit.svg",
            },
            {
                name: "Bsteriski ry",
                homepageLink: new URL("https://www.asteriski.fi"),
                logo: "https://asteriski.fi/wp-content/uploads/2022/06/asteriski-logo_1_33.png",
            }
        ],
    };

    const selectedPartnerData = partnersGroup === "0" ? partnersData0 : partnersData1;

    return (
        <InfiniteScroll
            duration={90000}
            direction={scrollDirection}
            showFade={false}
            className="flex flex-row justify-center"
        >
            {selectedPartnerData.partners.flatMap((partner) => {
                return (
                    <a href={partner.homepageLink.toString()} target="_blank" rel="noopener noreferrer">
                        <div
                            key={`${partner}`}
                            className="mr-5 flex md:min-w-fit max-w-[90vw] items-center gap-3 rounded-3xl text-neutral-400 p-3 border border-neutral-700/60 bg-neutral-800/30 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                            data-tech-name={`${partner}`}
                        >

                            <span className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-white/20 p-2 text-lg shadow-inner dark:bg-neutral-700/30">
                                <img src={partner.logo} className="text-xl max-w-full max-h-full" />
                            </span>
                            <span className="font-medium text-xl md:text-3xl dark:text-white">
                                {partner.name}
                            </span>
                        </div>
                    </a>
                );

            })}
        </InfiniteScroll>
    );

}

export default Partners;