import Image from "next/image";
import React from "react";

const Features = () => {
    return (
        <section className="py-24">
            <div className="max-w-[1200px] mx-auto px-16">
                <div className="flex justify-center">
                    <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
                        <span>✶</span>
                        <span className="text-sm">Features</span>
                    </div>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                
                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl col-span-2 group">
                            <div className="aspect-video">
                                <div className="aspect-video flex items-center justify-center">
                                    <div className="size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900 z-40">
                                        <Image
                                            alt="avatar"
                                            loading="lazy"
                                            width="80"
                                            height="80"
                                            className="rounded-full"
                                            style={{ color: "transparent" }}
                                            src="/avatar-ashwin-santiago.webp"
                                        />
                                    </div>
                                    <div className="size-20 rounded-full overflow-hidden border-4 p-1 bg-neutral-900 -ml-6 border-indigo-500 z-30">
                                        <Image
                                            alt="avatar"
                                            loading="lazy"
                                            width="80"
                                            height="80"
                                            className="rounded-full"
                                            style={{ color: "transparent" }}
                                            src="/avatar-ashwin-santiago.webp"
                                        />
                                    </div>
                                    <div className="size-20 rounded-full overflow-hidden border-4 p-1 bg-neutral-900 -ml-6 border-amber-500 z-20">
                                        <Image
                                            alt="avatar"
                                            loading="lazy"
                                            width="80"
                                            height="80"
                                            className="rounded-full"
                                            style={{ color: "transparent" }}
                                            src="/avatar-ashwin-santiago.webp"
                                        />
                                    </div>
                                    <div className="size-20 rounded-full overflow-hidden border-4 p-1 bg-neutral-900 -ml-6 border-transparent group-hover:border-green-500 duration-300 transition">
                                        <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                            <Image
                                                alt="avatar"
                                                loading="lazy"
                                                width="80"
                                                height="80"
                                                className=" absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{ color: "transparent" }}
                                                src="/avatar-ashwin-santiago.webp"
                                            />
                                            <span className="size-1.5 bg-white rounded-full inline-flex "></span>
                                            <span className="size-1.5 bg-white rounded-full inline-flex "></span>
                                            <span className="size-1.5 bg-white rounded-full inline-flex "></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-3xl font-medium mt-6">
                                    Real-time Collaboration
                                </h3>
                                <p className="text-white/50 mt-2">
                                    Work together in real-time with your team
                                    and clients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" md:col-span-2 lg:col-span-1">
                        <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl group">
                            <div className="aspect-video">
                                <div className="aspect-video flex items-center justify-center">
                                    <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition-colors duration-500">
                                        We&apos;ve achieved{" "}
                                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                            <span>incredible</span>
                                            <span className="">
                                                <video
                                                    src="/gif.htm"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                                ></video>
                                            </span>
                                        </span>{" "}
                                        growth this year
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-3xl font-medium mt-6">
                                    Interactive Prototyping
                                </h3>
                                <p className="text-white/50 mt-2">
                                    Engage your stakeholders with interactive
                                    prototypes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto ">
                        <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl group">
                            <div className="aspect-video">
                                <div className="aspect-video flex items-center justify-center gap-5">
                                    <div className="size-14 bg-neutral-300 inline-flex items-center justify-center text-neutral-950 rounded-2xl text-xl font-medium w-28 outline outline-4 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500">
                                        shift
                                    </div>
                                    <div className="size-14 bg-neutral-300 inline-flex items-center justify-center text-neutral-950 rounded-2xl text-xl font-medium outline outline-4 outline-offset-4 outline-transparent group-hover:outline-lime-400 t group-hover:translate-y-1 transition-all duration-500 delay-150">
                                        alt
                                    </div>
                                    <div className="size-14 bg-neutral-300 inline-flex items-center justify-center text-neutral-950 rounded-2xl text-xl font-medium outline outline-4 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-300">
                                        C
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-3xl font-medium mt-6">
                                    Keyboard Quick Action
                                </h3>
                                <p className="text-white/50 mt-2">
                                    Create a design system that is accessible to
                                    everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* buttons */}
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    <div className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex items-center gap-3 hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                            ✶
                        </span>
                        <span className="font-medium md:text-lg">
                            Asset Library
                        </span>
                    </div>
                    <div className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex items-center gap-3 hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                            ✶
                        </span>
                        <span className="font-medium md:text-lg">
                            Code Preview
                        </span>
                    </div>
                    <div className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex items-center gap-3 hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                            ✶
                        </span>
                        <span className="font-medium md:text-lg">
                            Flow Mode
                        </span>
                    </div>
                    <div className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex items-center gap-3 hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                            ✶
                        </span>
                        <span className="font-medium md:text-lg">
                            Smart Sync
                        </span>
                    </div>
                    <div className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex items-center gap-3 hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                            ✶
                        </span>
                        <span className="font-medium md:text-lg">
                            Auto Layout
                        </span>
                    </div>
                    <div className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex items-center gap-3 hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                            ✶
                        </span>
                        <span className="font-medium md:text-lg">
                            Fast Search
                        </span>
                    </div>
                    <div className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex items-center gap-3 hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                            ✶
                        </span>
                        <span className="font-medium md:text-lg">
                            Smart Guides
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
