"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "motion/react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

const Introduction = () => {
    const scrollTarget = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    // useMotionValueEvent(wordIndex, "change", (latest) => {
    //     console.log(latest);
    // });

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(Math.floor(latest));
        });
    }, [wordIndex]);

    return (
        <>
            <section className="py-24">
                <div className="container px-16 mx-auto">
                    <div className="sticky top-20  md:top-28 lg:top-40">
                        <div className="flex justify-center">
                            <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
                                <span>✶</span>
                                <span className="text-sm">
                                    Introduction Layers
                                </span>
                            </div>
                        </div>
                        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                            <span>Your creative process deserves batter</span>
                            <span className="">
                                {words.map((word, index) => (
                                    <span
                                        key={index}
                                        className={twMerge(
                                            "transition duration-500 text-white/15",
                                            index < currentWord && "text-white"
                                        )}
                                    >
                                        {word}{" "}
                                    </span>
                                ))}
                            </span>
                            <span className="text-lime-400 block">
                                That&apos;s why we built Layers.
                            </span>
                        </div>
                    </div>
                    <div className="h-[150vh]" ref={scrollTarget}></div>
                </div>
            </section>
        </>
    );
};

export default Introduction;
