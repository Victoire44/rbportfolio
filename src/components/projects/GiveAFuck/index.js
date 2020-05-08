import React, {useState} from "react"
import {motion} from "framer-motion"
import Css from "../Css.js"
import Item from "../../Item"
import Image from "../../Image"
import TitleImage from "../TitleImage"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import fuck from "./assets/fuck.jpg"
import dimanche from "./assets/dimanche.jpg"
import giveafuck from "./assets/giveafuck.jpg"

export function GiveAFuckItem() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="giveAFuck" top={37} left={77} width={26} fontSize={1.5} scrollSpeed={14}>
            <motion.div layoutId="project-image-giveafuck" className={classes.cover}
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}>
                <Image src={giveafuck} alt="Give a fuck"/>
                <TitleImage
                    isHover={isHover}
                    title="Give"
                    style={isHover ? {top: "66%", left: "6%", fontSize: "150%"} : {top: "68%", left: "6%"}}
                />
                <TitleImage
                    isHover={isHover}
                    title="A Fuck"
                    style={isHover ? {top: "76%", left: "6%", fontSize: "150%"} : {top: "75%", left: "6%"}}
                />
            </motion.div>
        </Item>
    )
}

export default function GiveAFuck() {

    return (
        <Gallery>
            <GalleryItem>
                <motion.img layoutId="project-image-giveafuck" src={giveafuck} alt="Give a fuck"/>
            </GalleryItem>
            <GalleryItem><img src={dimanche} alt="Give a fuck"/></GalleryItem>
            <GalleryItem><img src={fuck} alt="Share more consume less"/></GalleryItem>
        </Gallery>
    )
}
