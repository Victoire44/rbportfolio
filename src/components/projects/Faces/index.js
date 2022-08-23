import React, { useState } from "react"
import { motion } from "framer-motion"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Image from "../../Image"
import Item from "../../Item"
import palace from "./assets/palace.jpg"
import duo from "./assets/duo.jpg"
import face from "./assets/face.jpg"
import portrait from "./assets/portrait.jpg"
import quatro from "./assets/quatro.jpg"
import faces from "./assets/faces.jpg"
import ImageTitle from "../ImageTitle"

export function FacesItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="faces" top={41} left={5} width={29} fontSize={1.5} scrollSpeed={15}>
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
                <GalleryItem><img src={palace} alt="Face" /></GalleryItem>
                <GalleryItem><img src={quatro} alt="Quatro" /></GalleryItem>
                <GalleryItem><img src={face} alt="Face" /></GalleryItem>
                <GalleryItem><img src={portrait} alt="Portrait" /></GalleryItem>
                <GalleryItem><img src={duo} alt="Duo" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}
