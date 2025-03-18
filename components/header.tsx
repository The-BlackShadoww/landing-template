"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "Features",
        href: "#features",
    },
    {
        name: "Pricing",
        href: "#pricing",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="py-4 lg:py-8 fixed top-0 z-50 w-full">
            <div className="container max-w-5xl px-16 mx-auto">
                <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                    <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
                        <div className="">
                            <Link href="/">
                                <Image
                                    alt="Logo"
                                    loading="lazy"
                                    width="146"
                                    height="48"
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-9 md:h-auto w-auto"
                                    style={{ color: "transparent" }}
                                    src="logo.svg"
                                />
                            </Link>
                        </div>
                        <div className="lg:flex justify-center items-center hidden">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="hover:text-lime-400"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="flex justify-end ">
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
                                className="feather feather-menu md:hidden"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <line
                                    x1="3"
                                    y1="6"
                                    x2="21"
                                    y2="6"
                                    className={twMerge(
                                        "origin-left transition",
                                        isOpen && "rotate-45 -translate-y-1"
                                    )}
                                ></line>
                                <line
                                    x1="3"
                                    y1="12"
                                    x2="21"
                                    y2="12"
                                    className={twMerge(
                                        "transition",
                                        isOpen && "opacity-0"
                                    )}
                                ></line>
                                <line
                                    x1="3"
                                    y1="18"
                                    x2="21"
                                    y2="18"
                                    className={twMerge(
                                        "origin-left transition",
                                        isOpen && "-rotate-45 translate-y-1"
                                    )}
                                ></line>
                            </svg>
                            <div className="hidden md:inline-flex gap-4">
                                <button className="border h-12 rounded-full px-6 font-medium border-white text-white bg-transparent">
                                    Log In
                                </button>
                                <button className="border h-12 rounded-full px-6 font-medium bg-lime-400 text-neutral-950 border-line-400">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Nav */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-col items-center gap-4 py-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className=""
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <button className="border h-12 rounded-full px-6 font-medium border-white text-white bg-transparent">
                                        Log In
                                    </button>
                                    <button className="border h-12 rounded-full px-6 font-medium bg-lime-400 text-neutral-950 border-line-400">
                                        Sign Up
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Header;
