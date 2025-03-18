import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import Integrations from "@/components/integrations";
import Cta from "@/components/cta";
import Features from "@/components/Features";
export default function Home() {
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
