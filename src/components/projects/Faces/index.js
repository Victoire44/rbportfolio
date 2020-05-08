import React, {useState} from "react"
import {motion} from "framer-motion"
import Css from "../Css.js"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Image from "../../Image"
import Item from "../../Item"
import b from "./assets/b.jpg"
import duo from "./assets/duo.jpg"
import face from "./assets/face.jpg"
import portrait from "./assets/portrait.jpg"
import quatro from "./assets/quatro.jpg"
import faces from "./assets/faces.jpg"
import TitleImage from "../TitleImage"

export function FacesItem() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="faces" top={22} left={0} width={29} fontSize={1.5} scrollSpeed={17}>
            <motion.div key="item-image-faces" layoutId="project-image-faces" className={classes.cover}
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}
            >
                <Image src={faces} alt="Faces"/>
                <TitleImage
                    isHover={isHover}
                    title="Faces"
                    style={isHover ? {top: "80%", left: "55%", fontSize: "150%"} : {top: "80%", left: "58%"}}
                />
            </motion.div>
        </Item>
    )
}

export default function Faces() {

    return (
        <Gallery>
            <GalleryItem>
                <motion.img key="project-image-faces" layoutId="project-image-faces" src={faces} alt="Face"/>
            </GalleryItem>
            <GalleryItem><img src={b} alt="Face"/></GalleryItem>
            <GalleryItem><img src={quatro} alt="Quatro"/></GalleryItem>
            <GalleryItem><img src={face} alt="Face"/></GalleryItem>
            <GalleryItem><img src={portrait} alt="Portrait"/></GalleryItem>
            <GalleryItem><img src={duo} alt="Duo"/></GalleryItem>
        </Gallery>
    )
}
