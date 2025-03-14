"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
    const constraintsRef = useRef(null);

    return (
        <section
            className="py-24"
            style={{ cursor: 'url("/cursor-you.svg"), auto' }}
            ref={constraintsRef}
        >
            <div className="max-w-[1200px] mx-auto text-center px-16 relative">
                <div className="hidden lg:block">
                    {/* Left */}
                    <div className="">
                        <motion.div
                            className="absolute -left-32 top-16 hidden lg:block cursor-grab"
                            initial={{ x: -100, y: 100, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                ease: "easeInOut",
                                duration: 0.5,
                            }}
                        >
                            <motion.img
                                src="/design-example-1.webp"
                                width={318}
                                height={467}
                                alt="design-example-1"
                                drag
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="absolute left-56 top-96"
                            initial={{ x: -200, y: 100, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                ease: "easeInOut",
                                duration: 0.5,
                            }}
                        >
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-mouse-pointer text-white size-5"
                                >
                                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                                    <path d="M13 13l6 6"></path>
                                </svg>
                                <div className="absolute top-full left-full ">
                                    <div className="inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none">
                                        Mehedi
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* right */}
                    <div className="">
                        <div className="absolute -right-64 -top-16 hidden lg:block cursor-grab">
                            <Image
                                src="/design-example-2.png"
                                width={440}
                                height={592}
                                alt="design-example-2"
                            />
                        </div>{" "}
                        <div className="absolute right-80 -top-4">
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-mouse-pointer text-white size-5"
                                >
                                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                                    <path d="M13 13l6 6"></path>
                                </svg>
                                <div className="absolute top-full left-full ">
                                    <div className="inline-flex rounded-full font-bold text-sm px-2 rounded-tl-none bg-red-500">
                                        Hasan
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    ✨ $7.5M seed raised
                </div>
                <h1 className="text-[96px]/[100%] font-medium mt-6">
                    Impactful design,
                    <br /> created effortlessly
                </h1>
                <p className="text-center text-white/50 mt-8 md:max-w-2xl mx-auto">
                    design tools should&#39;t slow you down. Layers combine that
                    keeps you in your creative flow. design tools should&#39;t
                    slow you down. Layers combine that keeps you in your.
                </p>
                <form className="flex flex-wrap border border-white/15 rounded-full p-2 mt-8 w-full max-w-lg mx-auto gap-2">
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder="Enter your email"
                        className="bg-transparent px-4 outline-none flex-1 min-w-[180px]"
                        name="email"
                    />
                    <button
                        className="border h-12 rounded-full font-medium bg-lime-400 text-neutral-950 border-line-400  whitespace-nowrap shrink-0 px-6 py-2"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;
