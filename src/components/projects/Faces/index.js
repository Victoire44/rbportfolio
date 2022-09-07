import React, { useState } from "react"
import { motion } from "framer-motion"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Image from "../../Image"
import Item from "../../Item"
import palace from "./assets/palace.jpg"
import faces from "./assets/faces.jpg"
import nike from "./assets/nike.jpg"
import smoke from "./assets/smoke.jpg"
import blue from "./assets/blue.jpg"
import jordan from "./assets/jordan.jpg"

import ImageTitle from "../ImageTitle"

export function FacesItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="faces" top={110} left={25} width={27} fontSize={1.5} scrollSpeed={15}>
            <motion.div layoutId="project-container-faces"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={faces} alt="Faces" layoutId="project-image-faces"/>
                <ImageTitle
                    isHover={isHover}
                    title="Faces"
                    top="80%"
                    left="58%"
                    topHover="80%"
                    leftHover="55%"
                />
            </motion.div>
        </Item>
    )
}

export default function Faces() {

    return (
        <motion.div layoutId="project-container-faces">
            <Gallery>
                <GalleryItem><motion.img src={faces} alt="Face" layoutId="project-image-faces" /></GalleryItem>
                <GalleryItem><img src={nike} alt="Nike" /></GalleryItem>
                <GalleryItem><img src={smoke} alt="Smoke" /></GalleryItem>
                <GalleryItem><img src={blue} alt="Blue" /></GalleryItem>
                <GalleryItem><img src={jordan} alt="Duo" /></GalleryItem>
                <GalleryItem><img src={palace} alt="Portrait" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}


