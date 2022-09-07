import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import yellow from "./assets/yellow.jpg"

export default function Yellow() {
    const classes = Css()

    return (
        <CanvasItem top={55} left={45} width={20} scrollSpeed={8} className={classes.item}>
            <Image src={yellow} alt="Yellow" className={classes.cover}/>
        </CanvasItem>
    )
}