import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
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
                                <a href="#">Home</a>
                                <a href="#features">Features</a>
                                <a href="#integrations">Integrations</a>
                                <a href="#faqs">FAQs</a>
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
                            >
                                <line
                                    x1="3"
                                    y1="6"
                                    x2="21"
                                    y2="6"
                                    className="origin-left transition"
                                ></line>
                                <line
                                    x1="3"
                                    y1="12"
                                    x2="21"
                                    y2="12"
                                    className="transition"
                                ></line>
                                <line
                                    x1="3"
                                    y1="18"
                                    x2="21"
                                    y2="18"
                                    className="origin-left transition"
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
                </div>
            </div>
        </header>
    );
};

export default Header;
