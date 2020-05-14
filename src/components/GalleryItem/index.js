import React, {cloneElement, useContext, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Frame} from "framer"
import {CursorContext} from "../Cursor";
import CamCursor from "../Cursor/CamCursor"

const useStyles = makeStyles({
    frame: {
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        "@media only screen and (max-width: 600px) and (pointer: coarse)": {
            maxHeight: "80vh"
        },
    },
    galleryItem: {
        maxHeight: "100%",
        maxWidth: "100%",
        height: "auto",
        width: "auto",
        pointerEvents: "auto"
    }
})

export default function GalleryItem(props) {
    const classes = useStyles()
    const setCursor = useContext(CursorContext)

    const handleOver = e => {
        e.stopPropagation()
        setCursor(CamCursor("initial"))
    }

    return (
        <div {...props} style={{...props.style, pointerEvents: "none"}}>
            <Frame background={null} className={classes.frame} width="100%" height="100%" >
                {cloneElement(props.children, {
                    className: classes.galleryItem,
                    onPointerOver: handleOver,
                    onPointerDown: e => e.stopPropagation()
                })}
            </Frame>
        </div>
    )
}