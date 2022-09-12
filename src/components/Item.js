import React from "react"
import {Link} from "react-router-dom"
import Css from "./projects/Css";
import CanvasItem from "./CanvasItem";

export default function Item({id, top, left, width, fontSize, scrollSpeed, children}) {
    const classes = Css()

    return (
        <CanvasItem top={top}
                    left={left}
                    width={width}
                    fontSize={fontSize}
                    scrollSpeed={scrollSpeed}
                    className={classes.item}
        >
            <Link to={`/home/${id}`}
                  key={`item-${id}`}
            >
                <div className={classes.cover}>
                    {children}
                </div>
            </Link>
        </CanvasItem>
    )
}