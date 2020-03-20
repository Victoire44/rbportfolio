import React from "react"
import CanvasItem from "../../CanvasItem"
import Popup from "../../Popup"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"

export default function Vimsml() {
    const classes = Css()

    return (
        <CanvasItem top="1060px" left="180px" scrollSpeed={11} className={classes.item}>
            <Popup image={vimsml} alt="Vimsml" height="380px">
                <div style={{height: "700px"}}>
                    <img src={vimsml} alt="Vimsml" style={{height: "100%"}} />
                </div>
            </Popup>
        </CanvasItem>
    )
}