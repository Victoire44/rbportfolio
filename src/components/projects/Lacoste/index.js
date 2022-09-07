import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import { motion } from "framer-motion"
import { Typography } from "@material-ui/core"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import lacoste from "./assets/lacoste.jpg"

export function LacosteItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="lacoste" top={36} left={95} width={30} scrollSpeed={10} fontSize={1.5}>
            <motion.div layoutId="project-container-lacoste"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={lacoste} alt="Lacoste" layoutId="project-image-lacoste" />
              <ImageTitle
                    isHover={isHover}
                    title="Lacoste"
                    top="66%"
                    left="5%"
                    topHover="60%"
                    leftHover="4%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Eaux fraiches"
                    top="75%"
                    left="5%"
                    topHover="74%"
                    leftHover="4%"
                />
            </motion.div>
        </Item>
    )
}

export default function Lacoste() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-lacoste">
            <motion.div layoutId="project-image-lacoste"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/701276414"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
            <div className={classes.caption}>
                <Typography>Lacoste « EAU FRAICHE »</Typography>
                <Typography>Director Remi Besse</Typography>
                <Typography>Production Iconoclast</Typography>
                <Typography>Agency Publicis Luxe</Typography>
                <Typography>Dop Paul Ozgur</Typography>
                <Typography>Chorégraphe Kevin Bagot</Typography>
                <Typography>Set Design Lucie Beauvert</Typography>
            </div>
        </motion.div>
    )
}
