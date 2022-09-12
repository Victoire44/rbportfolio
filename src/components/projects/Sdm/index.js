import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import sdm from "./assets/sdm.mp4"
import { motion } from "framer-motion"

export default function Sdm() {
    const classes = Css()

    return (
        <CanvasItem top={155} left={10} width={20} height={30} scrollSpeed={9} className={classes.item}>
            <motion.video src={sdm} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}

