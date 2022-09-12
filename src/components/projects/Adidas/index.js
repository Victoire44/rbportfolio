import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import adidas from "./assets/adidas.jpg"
import adidas2 from "./assets/adidas2.jpg"
import adidas3 from "./assets/adidas3.jpg"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import CamCursor from "../../Cursor/CamCursor"
import adidas1 from "./assets/adidas.mp4"

export function AdidasItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="adidas" top={34} left={33} width={33} fontSize={1.5} scrollSpeed={13}>
            <motion.div layoutId="project-container-adidas"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={adidas} alt="Adidas" layoutId="project-image-adidas" />
                <ImageTitle
                    isHover={isHover}
                    title="Adidas Originals"
                    top="75%"
                    left="9%"
                    topHover="74%"
                    leftHover="10%"
                />
            </motion.div>
        </Item>
    )
}

export default function Adidas() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-adidas">
            <Gallery>
                <GalleryItem
                    layoutId="project-image-adidas"
                    onPointerOver={handlePointerOverVideo}
                    onPointerOut={() => setCursor(CamCursor("close"))}

                >
                    <div>
                        <ReactPlayer
                            url={adidas1}
                            type="video/mp4"
                            playsinline
                            controls
                            playing
                            loop
                            width="100%"
                            height="auto"
                        />
                        <div className={classes.caption}>
                            <Typography>Adidas originals « FOREVER »</Typography>
                            <Typography>Director Remi Besse</Typography>
                            <Typography>Production Iconoclast</Typography>
                            <Typography>Starring Adèle Exarchopoulos, Lous & the Yakuza, Dinos</Typography>
                        </div>
                    </div>
                </GalleryItem>
                <GalleryItem><img src={adidas2} alt="Adidas" /></GalleryItem>
                <GalleryItem><img src={adidas3} alt="Adidas" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}
