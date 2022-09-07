import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import psgJordan from "./assets/psgjordan.jpg"

export default function PsgJordan() {
    const classes = Css()

    return (
        <CanvasItem top={68} left={64} width={22} scrollSpeed={10} className={classes.item}>
            <Image src={psgJordan} alt="PSG Jordan" className={classes.cover}/>
        </CanvasItem>
    )
}
