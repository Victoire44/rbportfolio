import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import oboy from "./assets/oboy.jpg"

export default function Oboy() {
    const classes = Css()

    return (
        <CanvasItem top={106} left={53} width={17} scrollSpeed={8} className={classes.item}>
            <Image src={oboy} alt="Oboy" className={classes.cover}/>
        </CanvasItem>
    )
}