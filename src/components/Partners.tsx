import React from "react";
import { InfiniteScroll } from "./InfiniteScroll";

const Partners: React.FC = () => {

    interface Partner {
        name: string;
        homepageLink: URL;
        logo: string;
    }

    const partnersData: { description: string; partners: Partner[] } = {
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
                name: "PostgreSQL",
                homepageLink: new URL("https://postgresql.org"),
                logo: "",
            },
            {
                name: "MySQL",
                homepageLink: new URL("https://mysql.com"),
                logo: "",
            },
            {
                name: "SQLite",
                homepageLink: new URL("https://sqlite.org"),
                logo: "",
            },
            {
                name: "Redis",
                homepageLink: new URL("https://redis.io"),
                logo: "",
            },
            {
                name: "Elasticsearch",
                homepageLink: new URL("https://elastic.co"),
                logo: "",
            },
            {
                name: "Kibana",
                homepageLink: new URL("https://elastic.co/kibana"),
                logo: "",
            },
            {
                name: "Logstash",
                homepageLink: new URL("https://elastic.co/logstash"),
                logo: "",
            },
            {
                name: "Beats",
                homepageLink: new URL("https://elastic.co/beats"),
                logo: "",
            },
            {
                name: "Prometheus",
                homepageLink: new URL("https://prometheus.io"),
                logo: "",
            },
        ],
    };

    return (
        <InfiniteScroll
            duration={30000}
            direction={"normal"}
            showFade={false}
            className="flex flex-row justify-center"
        >
            {partnersData.partners.flatMap((partner) => {
                return (
                    <a href={partner.homepageLink.toString()} target="_blank" rel="noopener noreferrer">
                        <div
                            key={`${partner}`}
                            className="tech-badge mr-5 flex items-center gap-3 rounded-full repo-card dark:text-neutral-400 text-neutral-500 p-3 border dark:border-neutral-700/60 border-neutral-200/80 bg-white/30 dark:bg-neutral-800/30 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                            data-tech-name={`${partner}`}
                        >

                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 p-2 text-lg shadow-inner dark:bg-neutral-700/30">
                                <img src={partner.logo} className="tech-icon text-xl" />
                            </span>
                            <span className="font-medium text-neutral-800 dark:text-white">
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