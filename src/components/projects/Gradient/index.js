import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import gradient from "./assets/gradient.jpg"

export default function Gradient() {
    const classes = Css()

    return (
        <CanvasItem top={38} left={7} width={19} scrollSpeed={5} className={classes.item}>
            <Image src={gradient} alt="Gradient" className={classes.cover}/>
        </CanvasItem>
    )
}