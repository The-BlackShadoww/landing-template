"use client";

import Image from "next/image";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface ContentType {
    img: string;
    name: string;
    description: string;
}

interface IntegrationColumnProps {
    content: ContentType[];
    className?: string;
    reverse?: boolean;
}

const IntegrationColumn = ({
    content,
    className,
    reverse,
}: IntegrationColumnProps) => {
    return (
        <motion.div
            initial={{ y: reverse ? "-50%" : 0 }}
            animate={{ y: reverse ? 0 : "-50%" }}
            transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {content.map((content) => (
                        <div
                            key={content.name}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                        >
                            <div className="flex justify-center">
                                <Image
                                    alt="Figma"
                                    loading="lazy"
                                    width="400"
                                    height="400"
                                    decoding="async"
                                    data-nimg="1"
                                    className="size-24"
                                    style={{ color: "transparent" }}
                                    src={content.img}
                                />
                            </div>
                            <h3 className="text-3xl text-center mt-6">
                                {content.name}
                            </h3>
                            <p className="text-center text-white/50 mt-2">
                                {content.description}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
};

export default IntegrationColumn;
