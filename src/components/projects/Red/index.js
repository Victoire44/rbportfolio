import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import red from "./assets/red.jpg"

export default function Red() {
    const classes = Css()

    return (
        <CanvasItem top={8} left={83} width={23} scrollSpeed={15} className={classes.item}>
            <Image src={red} alt="Portrait" className={classes.cover}/>
        </CanvasItem>
    )
}