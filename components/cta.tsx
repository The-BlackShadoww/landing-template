import React from "react";
import { Marquee } from "./ui/marquee";

const Cta = () => {
    const num = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    return (
        <section className="py-24">
            <Marquee
                className={`[--duration:60s] w-full py-1 border border-lime-400/10`}
            >
                <div className="w-full flex flex-none gap-16 text-7xl md:text-8xl font-medium group">
                    {num.map((item) => (
                        <div key={item} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">✶</span>
                            <span className="group-hover:text-lime-400 transition-colors duration-300 text-[96px]/[96px] cursor-pointer">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
};

export default Cta;
