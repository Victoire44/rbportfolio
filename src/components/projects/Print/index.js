import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import print from "./assets/print.jpg";

export default function Print() {
    const classes = Css()

    return (
        <CanvasItem top={21} left={129} width={22} scrollSpeed={17} className={classes.item}>
            <Project id="print" image={print} alt="Print">
                <div className={classes.portraitFormat}>
                    <img src={print} alt="Print"/>
                </div>
            </Project>
        </CanvasItem>
    )
}