import React, { useState } from "react"
import { motion } from "framer-motion"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Image from "../../Image"
import Item from "../../Item"
import ras7 from "./assets/ras7.jpg"
import ras6 from "./assets/ras6.jpg"
import ras5 from "./assets/ras5.jpg"
import ras4 from "./assets/ras4.jpg"
import ras3 from "./assets/ras3.jpg"
import ras2 from "./assets/ras2.jpg"
import ras1 from "./assets/ras1.jpg"
import ras from "./assets/ras.jpg"
import ImageTitle from "../ImageTitle"

export function RasItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="ras" top={53} left={11} width={25} fontSize={1.5} scrollSpeed={12}>
            <motion.div layoutId="project-container-ras"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={ras} alt="Faces" layoutId="project-image-ras"/>
                <ImageTitle
                    isHover={isHover}
                    title="R.A.S"
                    top="5%"
                    left="66%"
                    topHover="5%"
                    leftHover="64%"
                />
            </motion.div>
        </Item>
    )
}

export default function Ras() {

    return (
        <motion.div layoutId="project-container-ras">
            <Gallery>
                <GalleryItem><motion.img src={ras} alt="R.A.S" layoutId="project-image-ras" /></GalleryItem>
                <GalleryItem><img src={ras1} alt="R.A.S" /></GalleryItem>
                <GalleryItem><img src={ras2} alt="R.A.S" /></GalleryItem>
                <GalleryItem><img src={ras3} alt="R.A.S" /></GalleryItem>
                <GalleryItem><img src={ras4} alt="R.A.S" /></GalleryItem>
                <GalleryItem><img src={ras5} alt="R.A.S" /></GalleryItem>
                <GalleryItem><img src={ras6} alt="R.A.S" /></GalleryItem>
                <GalleryItem><img src={ras7} alt="R.A.S" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}
