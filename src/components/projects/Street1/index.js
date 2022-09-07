import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import street from "../Streets/assets/streets.jpg"

export default function Street() {
    const classes = Css()

    return (
        <CanvasItem top={83} left={8} width={24} scrollSpeed={8} className={classes.item}>
            <Image src={street} alt="Streets" className={classes.cover}/>
        </CanvasItem>
    )
}