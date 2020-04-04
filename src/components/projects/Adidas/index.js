import React, {useState} from "react"
import ReactPlayer from "react-player"
import {Typography} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import adidas from "./assets/adidas.jpg"

export default function Adidas() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top={1} left={27} width={28} fontSize={1.5} scrollSpeed={13} className={classes.item}
                    onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)}
                    onPointerUp={() => setIsHover(false)}>
            <Project id="adidas" image={adidas} alt="Adidas">
                <div className={classes.videoWrapper}>
                    <ReactPlayer
                        url="https://vimeo.com/323459822"
                        controls
                        playing
                        loop
                        muted
                    />
                </div>

                <div className={classes.caption}>
                    <Typography>Adidas reboosted</Typography>
                    <Typography>Directed by Remi Besse</Typography>
                    <Typography>Dop Ludovic Zuili</Typography>
                    <Typography>Soundtrack Le Ministere</Typography>
                </div>
            </Project>
            <Typography className={classes.titleItem} style={isHover ? {top: "58%", left: "2%", fontSize: "150%"} : {
                top: "67%",
                left: "5%"
            }}>Adidas</Typography>
            <Typography className={classes.titleItem} style={isHover ? {top: "74%", left: "8.5%", fontSize: "150%"} : {
                top: "78%",
                left: "9.5%"
            }}>Reboosted</Typography>
        </CanvasItem>
    )
}

