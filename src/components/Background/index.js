import React, { useState, useRef, useEffect } from "react"
import { Frame } from "framer";
import background from "./assets/background.jpg"
import Image from "../Image"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    background: {
        width: "100%",
        "@media only screen and (min-width: 2600px)": {
            width: "200%",
        }
    }
})


export default function Background(props) {
    const wrapperRef = useRef()
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)
    const classes = useStyles()

    useEffect(() => {
        document.addEventListener("pointermove", handleMove)
        document.addEventListener("touchstart", disableScroll)
        return () => {
            document.removeEventListener("pointermove", handleMove)
            document.removeEventListener("touchstart", disableScroll)
        }
    }, [])

    const disableScroll = () => setAutoScrollEnabled(false)

    const handleMove = e => {
        e.preventDefault()
        switch (e.pointerType) {
            case "mouse":
                setAutoScrollEnabled(true)
                setOffset({
                    x: window.innerWidth / 2 - e.clientX,
                    y: window.innerHeight / 2 - e.clientY
                })
                break
            case "touch":
                setAutoScrollEnabled(false)
                break
            default:
        }
    }

    const speedMultiplier = (props.scrollSpeed !== undefined ? props.scrollSpeed : 1) / 100
    const coordinates = {
        x: offset.x * -speedMultiplier,
        y: offset.y * -speedMultiplier
    }
    const spring = {
        type: "spring",
        damping: 100,
        stiffness: 100
    }

    return (
        <Frame {...props}
            ref={wrapperRef}
            background={""}
            animate={autoScrollEnabled ? coordinates : { x: 0, y: 0 }}
            transition={spring}
            style={{
                width: "150%",
                position: "absolute",
                left: "-50vw",
                top: "-50vh",
            }}
        >
            <img className={classes.background} src={background} alt="Background" />
        </Frame>
    )
}