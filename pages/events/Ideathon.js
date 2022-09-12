import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import {Button} from "@nextui-org/react";
// import './events.css'




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
                <title>Ideathon</title>
            
            </Head>
            
           <div className="head">
                IDEATHON
           </div>
           
           <p className="about">
           Ideathon is an event where the participants get a chance to pitch their ideas or plans
           In front of a panel of judges in order to get a chance to win cash prices. 

           </p>

           <div>
                <Button className="abt-btn" size="xlarge" shadow color="x-large" auto>
                    Submit
                </Button>
           </div>
        </div>
    )
}