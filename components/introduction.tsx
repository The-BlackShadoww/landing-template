"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const texts = [
    "Your creative process deserves better.",
    "You're racing to create exceptional work,",
    "but traditional design tools slow you down",
    "with unnecessary complexity and",
    "steep learning curves.",
    "That's why we built Layers.",
];

export default function Introduction() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const [wordOpacities, setWordOpacities] = useState<number[]>([]);
    const [isSticky, setIsSticky] = useState(true);

    // Process texts into words and calculate total words
    const { words, totalWords, animatedWordCount, animationRanges } =
        useMemo(() => {
            const processedWords = texts.map((text) => text.split(" "));

            // Calculate total words for all lines
            const wordCount = processedWords.reduce(
                (acc, lineWords) => acc + lineWords.length,
                0
            );

            // Calculate only the words that will be animated (excluding first and last lines)
            const animatedWords = processedWords
                .slice(1, -1)
                .reduce((acc, lineWords) => acc + lineWords.length, 0);

            // Pre-calculate animation ranges for each word
            const ranges: {
                isAnimated: boolean;
                start: number;
                end: number;
            }[] = [];

            let globalWordIndex = 0;
            let animatedWordIndex = 0;

            for (
                let lineIndex = 0;
                lineIndex < processedWords.length;
                lineIndex++
            ) {
                const lineWords = processedWords[lineIndex];
                const isFirstLine = lineIndex === 0;
                const isLastLine = lineIndex === processedWords.length - 1;

                for (
                    let wordIndex = 0;
                    wordIndex < lineWords.length;
                    wordIndex++
                ) {
                    if (!isFirstLine && !isLastLine) {
                        // Make the animation faster by compressing the ranges
                        const start =
                            (animatedWordIndex / Math.max(animatedWords, 1)) *
                            0.8;
                        const end =
                            ((animatedWordIndex + 1) /
                                Math.max(animatedWords, 1)) *
                            0.8;
                        ranges.push({ isAnimated: true, start, end });
                        animatedWordIndex++;
                    } else {
                        ranges.push({ isAnimated: false, start: 0, end: 0 });
                    }
                    globalWordIndex++;
                }
            }

            return {
                words: processedWords,
                totalWords: wordCount,
                animatedWordCount: animatedWords,
                animationRanges: ranges,
            };
        }, [texts]);

    // Create a scroll container that's tall enough to complete the animation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Update opacities based on scroll progress
    useEffect(() => {
        // Initialize opacities array
        const initialOpacities = animationRanges.map((range) => {
            return range.isAnimated ? 0.15 : 1;
        });
        setWordOpacities(initialOpacities);

        // Update opacities on scroll
        const updateOpacities = () => {
            const currentProgress = scrollYProgress.get();

            const newOpacities = animationRanges.map((range, index) => {
                if (!range.isAnimated) return 1;

                if (currentProgress >= range.end) {
                    return 1; // Fully visible
                } else if (currentProgress <= range.start) {
                    return 0.15; // Initial opacity
                } else {
                    // Calculate opacity based on progress
                    const progressInRange =
                        (currentProgress - range.start) /
                        (range.end - range.start);
                    return 0.15 + progressInRange * 0.85; // Scale from 0.15 to 1
                }
            });

            setWordOpacities(newOpacities);

            // Check if animation is complete (all words have reached full opacity)
            // We consider the animation complete when we reach 80% of the scroll progress
            // This ensures all words are fully visible before unsticking
            if (currentProgress >= 0.8) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        // Initial update
        updateOpacities();

        // Subscribe to scroll progress changes
        const unsubscribe = scrollYProgress.onChange(updateOpacities);

        return () => unsubscribe();
    }, [scrollYProgress, animationRanges]);

    return (
        <section
            className="relative bg-black"
            ref={containerRef}
            // Reduce the height to make the animation faster
            style={{ height: "200vh" }}
        >
            {/* This is the sticky container that holds the content */}
            <div
                ref={stickyRef}
                className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4 bg-black"
            >
                {/* Introduction Label */}

                <div className="flex justify-center">
                    <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
                        <span>✶</span>
                        <span className="text-sm">Introduction Layers</span>
                    </div>
                </div>
                {/* Text Container */}
                <div className="mx-auto max-w-4xl">
                    {words.map((lineWords, lineIndex) => {
                        const isFirstLine = lineIndex === 0;
                        const isLastLine = lineIndex === words.length - 1;

                        return (
                            <div
                                key={lineIndex}
                                className="flex flex-wrap justify-center"
                            >
                                {lineWords.map((word, wordIndex) => {
                                    // Calculate the global word index across all lines
                                    let globalWordIndex = 0;
                                    for (let i = 0; i < lineIndex; i++) {
                                        globalWordIndex += words[i].length;
                                    }
                                    globalWordIndex += wordIndex;

                                    // Apply lime color to the last line
                                    const textColor = isLastLine
                                        ? "#51FF0D"
                                        : "#FFFFFF";

                                    // Get opacity from our state
                                    const opacity =
                                        wordOpacities[globalWordIndex] || 1;

                                    return (
                                        <motion.span
                                            key={`${lineIndex}-${wordIndex}`}
                                            style={{
                                                opacity: opacity,
                                                color: textColor,
                                            }}
                                            className="mx-1 text-center text-4xl font-bold md:text-6xl"
                                        >
                                            {word}
                                        </motion.span>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// import React from "react";

// const Introduction = () => {
//     return (
//         <>
//             <section className="py-24">
//                 <div className="container px-16 mx-auto">
//                     <div className="sticky top-20  md:top-28 lg:top-40 border">
//                         <div className="flex justify-center">
//                             <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
//                                 <span>✶</span>
//                                 <span className="text-sm">
//                                     Introduction Layers
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
//                             <h1>Your creative process deserves batter</h1>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Introduction;
