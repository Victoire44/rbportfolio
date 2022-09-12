import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import complex from "./assets/complex.mp4"
import { motion } from "framer-motion"

export default function Complex() {
    const classes = Css()

    return (
        <CanvasItem top={154} left={79} width={15} height={20} scrollSpeed={9} className={classes.item}>
            <motion.video src={complex} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}

