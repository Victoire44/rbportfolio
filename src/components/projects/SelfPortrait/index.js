import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import selfportrait from "./assets/selfportrait.jpg"

export default function SelfPortrait() {
    const classes = Css()

    return (
        <CanvasItem top={183} left={20} width={18} scrollSpeed={12} className={classes.item}>
            <Image src={selfportrait} alt="Self-portraite" className={classes.cover}/>
        </CanvasItem>
    )
}