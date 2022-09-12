import React from "react"
import {motion} from "framer-motion"

export default function CamCursor(variant) {

    return (
        <svg version="1.1" viewBox="0 0 1154 654" fill="rgb(255,255,255)" xmlns="http://www.w3.org/2000/svg"
             width={372}
             style={{position: "relative", left: "-185px", top: "-105px"}}
        >
            <motion.g id="middle-cross" animate={{rotate: variant === "close" ? 45 : 0}} >
                <rect x="575" y={variant === "close" ? 282 : 287} rx="1" ry="1" width="4" height={variant === "close" ? 90 : 80}/>
                <rect x="532" y="325" rx="1" ry="1" width="90" height="4"/>
            </motion.g>
        </svg>
    )
}
