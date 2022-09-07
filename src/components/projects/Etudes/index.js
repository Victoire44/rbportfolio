import React, { useState } from "react"
import { motion } from "framer-motion"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import etudes from "./assets/etudes.jpg"
import etudes1 from "./assets/etudes1.jpg"
import etudes2 from "./assets/etudes2.jpg"
import etudes3 from "./assets/etudes3.jpg"
import etudes4 from "./assets/etudes4.jpg"
import etudes5 from "./assets/etudes5.jpg"

export function EtudesItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="etudes" top={5} left={50} width={20} fontSize={1.5} scrollSpeed={13}>
            <motion.div layoutId="project-container-etudes"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={etudes} alt="Etudes" layoutId="project-image-etudes" />
                <ImageTitle
                    isHover={isHover}
                    title="Etudes"
                    top="68%"
                    left="9%"
                    topHover="64%"
                    leftHover="10%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Peripherie"
                    top="75%"
                    left="9%"
                    topHover="74%"
                    leftHover="10%"
                />
            </motion.div>
        </Item>
    )
}

export default function Etudes() {

    return (
        <motion.div layoutId="project-container-etudes">
            <Gallery>
                <GalleryItem><motion.img src={etudes1} alt="Etudes" layoutId="project-image-etudes" /></GalleryItem>
                <GalleryItem><img src={etudes2} alt="Etudes" /></GalleryItem>
                <GalleryItem><img src={etudes3} alt="Etudes" /></GalleryItem>
                <GalleryItem><img src={etudes4} alt="Etudes" /></GalleryItem>
                <GalleryItem><img src={etudes5} alt="Etudes" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}

