import { Marquee } from "./ui/marquee";
import Image from "next/image";

const content = [
    {
        img: "figma-logo.svg",
        name: "Figma",
        description: "Figma is a collaborative interface design tool.",
    },
    {
        img: "framer-logo.svg",
        name: "framer",
        description: "Framer is a professional website prototyping tool.",
    },
    {
        img: "notion-logo.svg",
        name: "notion",
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        img: "relume-logo.svg",
        name: "relume",
        description: "Relume is a no-code website builder and design system.",
    },
    {
        img: "slack-logo.svg",
        name: "slack",
        description: "Slack is a powerful team communication platform.",
    },
    {
        img: "github-logo.svg",
        name: "github",
        description: "GitHub is the leading platform for code collaboration.",
    },
];

const firstRow = content.slice(0, content.length / 2);
const secondRow = content.slice(content.length / 2);

const Card = ({
    img,
    name,
    description,
}: {
    img: string;
    name: string;
    description: string;
}) => {
    return (
        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
            <div className="flex justify-center">
                <Image
                    alt="GitHub"
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
                    data-nimg="1"
                    className="size-24"
                    style={{ color: "transparent" }}
                    src={img}
                />
            </div>
            <h3 className="text-3xl text-center mt-6">{name}</h3>
            <p className="text-center text-white/50 mt-2">{description}</p>
        </div>
    );
};

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-[1200px] px-16 mx-auto">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div className="">
                        <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
                            <span>✶</span>
                            <span className="text-sm">Integrations</span>
                        </div>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            {" "}
                            Layers seamlessly connects with your favourite
                            tools, making it easy to plug into any workflow and
                            collaboration platforms.{" "}
                        </p>
                    </div>

                    <div
                        className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4"
                        style={{
                            maskImage:
                                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                            WebkitMaskImage:
                                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                        }}
                    >
                        <Marquee vertical className="[--duration:5s]">
                            {firstRow.map((item) => (
                                <Card key={item.name} {...item} />
                            ))}
                        </Marquee>{" "}
                        <Marquee reverse vertical className="[--duration:5s]">
                            {secondRow.map((item) => (
                                <Card key={item.name} {...item} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    );
}

// import { Marquee } from "./ui/marquee";
// import Image from "next/image";

// const content = [
//     { img: "figma-logo.svg", name: "Figma", description: "Figma" },
//     { img: "framer-logo.svg", name: "framer", description: "framer" },
//     { img: "notion-logo.svg", name: "notion", description: "notion" },
//     { img: "relume-logo.svg", name: "relume", description: "relume" },
//     { img: "slack-logo.svg", name: "slack", description: "slack" },
//     {
//         img: "github-logo.svg",
//         name: "github",
//         description: "GitHub is the leading platform for code collaboration.",
//     },
// ];

// const firstRow = content.slice(0, content.length / 2);
// const secondRow = content.slice(content.length / 2);

// const Card = ({
//     img,
//     name,
//     description,
// }: {
//     img: string;
//     name: string;
//     description: string;
// }) => {
//     return (
//         <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
//             <div className="flex justify-center">
//                 <Image
//                     alt="GitHub"
//                     loading="lazy"
//                     width="400"
//                     height="400"
//                     decoding="async"
//                     data-nimg="1"
//                     className="size-24"
//                     style={{ color: "transparent" }}
//                     src={img}
//                 />
//             </div>
//             <h3 className="text-3xl text-center mt-6">{name}</h3>
//             <p className="text-center text-white/50 mt-2">{description}</p>
//         </div>
//     );
// };

// export default function Integrations() {
//     return (
//         <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
//             <Marquee vertical className="[--duration:5s]">
//                 {firstRow.map((item) => (
//                     <Card key={item.name} {...item} />
//                 ))}
//             </Marquee>
//             <Marquee reverse vertical className="[--duration:5s]">
//                 {secondRow.map((item) => (
//                     <Card key={item.name} {...item} />
//                 ))}
//             </Marquee>
//             <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
//             <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
//         </div>
//     );
// }
