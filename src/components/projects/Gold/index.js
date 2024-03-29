import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import gold from "./assets/gold.jpg"

export default function Gold() {
    const classes = Css()

    return (
        <CanvasItem top={90} left={74} width={21} scrollSpeed={6} className={classes.item}>
            <Image src={gold} alt="Gold" className={classes.cover}/>
        </CanvasItem>
    )
}