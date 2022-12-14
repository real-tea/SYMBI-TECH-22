import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../components/About_us/About_us";

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function Events() {
    return (
        <div className="body">
            <AnimatedCursor
                innerSize={15}
                outerSize={40}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.6}
                outerScale={2}
                trailingSpeed={3}
            />
            <Head>
                <title>About-Symbitech</title>
            
            </Head>
            <About_us/>
        </div>
    )
}