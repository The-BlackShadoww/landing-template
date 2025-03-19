"use client";

import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import Integrations from "@/components/integrations";
import Cta from "@/components/cta";
import Features from "@/components/Features";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <div className="">
            <Hero />
            <Introduction />
            <Integrations />
            <Features />
            <Cta />
        </div>
    );
}
