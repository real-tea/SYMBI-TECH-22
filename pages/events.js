
const AnimatedCursor = dynamic(()=>import('react-animated-cursor'),{
    ssr:false
});

export default function Events(){
    return(
        <div className="body">
        <AnimatedCursor
            innerSize={15}
            outter
        />

        </div>
    )
}