"use client";

import React, { useEffect, useRef } from "react";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";

const Cta = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    const animation = useRef<AnimationPlaybackControls>(null);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animation.current = animate(
            scope.current,
            {
                x: "-50%",
            },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, [animate, scope]);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
                // animation.current.pause();
            } else {
                animation.current.speed = 1;
                // animation.current.play();
            }
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className={`overflow-x-clip p-4 flex`}>
                <motion.div
                    ref={scope}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Cta;

// import React from "react";
// import { Marquee } from "./ui/marquee";

// const Cta = () => {
//     const num = [
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//     ];

//     return (
//         <section className="py-24">
//             <Marquee
//                 className={`[--duration:60s] w-full py-1 border border-lime-400/10`}
//             >
//                 <div className="w-full flex flex-none gap-16 text-7xl md:text-8xl font-medium group">
//                     {num.map((item) => (
//                         <div key={item} className="flex items-center gap-16">
//                             <span className="text-lime-400 text-7xl">✶</span>
//                             <span className="group-hover:text-lime-400 transition-colors duration-300 text-[96px]/[96px] cursor-pointer">
//                                 Try it for free
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </Marquee>
//         </section>
//     );
// };

// export default Cta;
