import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import Carousel from 'react-bootstrap/Carousel'
import Css from "../Css.js"
import streets from "./assets/streets.jpg"
import streets1 from "./assets/streets1.jpg"
import streets2 from "./assets/streets2.jpg"
import streets3 from "./assets/streets3.jpg"

export default function Streets() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    const cover = <div className={classes.cover}
                       onPointerOver={() => setIsHover(true)}
                       onPointerOut={() => setIsHover(false)}
                       onPointerUp={() => setIsHover(false)}
    >
        <img src={streets} alt="Streets" style={{width: "100%"}}/>
        <Typography className={classes.titleItem} style={isHover ? { top: "76%", left: "9%", fontSize: "150%" } : { top: "78%", left: "12%" }}>Streets</Typography>
    </div>

    return (
        <CanvasItem top={0} left={74} width={23} fontSize={1.5} scrollSpeed={14} className={classes.item} onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)} onPointerUp={() => setIsHover(false)}>
            <Project id="streets" cover={cover}>
                <Gallery>
                    <Carousel.Item><img src={streets} alt="Streets"/></Carousel.Item>
                    <Carousel.Item><img src={streets1} alt="Streets"/></Carousel.Item>
                    <Carousel.Item><img src={streets2} alt="Streets" /></Carousel.Item>
                    <Carousel.Item><img src={streets3} alt="Streets"/></Carousel.Item>
                </Gallery>
            </Project>
        </CanvasItem>
    )
}

