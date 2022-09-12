import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import belleville from "./assets/belleville.jpg"

export default function Belleville() {
    const classes = Css()

    return (
        <CanvasItem top={83} left={8} width={24} scrollSpeed={8} className={classes.item}>
            <Image src={belleville} alt="Belleville" className={classes.cover}/>
        </CanvasItem>
    )
}