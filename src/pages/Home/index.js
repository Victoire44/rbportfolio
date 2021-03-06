import React, { useState, useEffect, useRef } from "react"
import CanvasScroll from "../../components/CanvasScroll"
import VideoIntro from "../../components/projects/VideoIntro"
import { AdidasItem } from "../../components/projects/Adidas"
import { StreetsItem } from "../../components/projects/Streets"
import { FacesItem } from "../../components/projects/Faces"
import { ComplexItem } from "../../components/projects/Complex"
import { GiveAFuckItem } from "../../components/projects/GiveAFuck"
import { BudweiserItem } from "../../components/projects/Budweiser"
import { HavanaItem } from "../../components/projects/Havana"
import { AccorHotelsItem } from "../../components/projects/AccorHotels"
import { VladimirItem } from "../../components/projects/Vladimir"
import { LeConsulatItem } from "../../components/projects/LeConsulat"
import { OboyItem } from "../../components/projects/Oboy"
import { NikeItem} from "../../components/projects/Nike"
import {SdmItem } from "../../components/projects/Sdm"
import Stylist1 from "../../components/projects/Stylist1"
import Stylist2 from "../../components/projects/Stylist2"
import Print from "../../components/projects/Print"
import Vimsml from "../../components/projects/Vimsml"
import Cavani from "../../components/projects/Cavani"
import Blue from "../../components/projects/Blue"
import Psg from "../../components/projects/PsgJordan"
import Red from "../../components/projects/Red"
import Filter from "../../components/projects/Filter"
import Collage from "../../components/projects/Collage"
import Yeux from "../../components/projects/Yeux"
import Ichon from "../../components/projects/Ichon"
import Ofr from "../../components/projects/Ofr"
import Offset from "../../components/projects/Offset"
import We from "../../components/projects/We"
import Girl from "../../components/projects/Girl"
import Koba from "../../components/projects/Koba"

import { motion } from "framer-motion"

function useForceUpdate() {
    const [, setValue] = useState(0)
    return () => setValue(value => ++value)
}

export default function Home(props) {
    const forceUpdate = useForceUpdate()
    const introLaunchTimeoutRef = useRef()
    const introFinishedTimeoutRef = useRef()
    const [intro, setIntro] = useState(
        document.documentElement.clientWidth < 600 ?
            false :
            (props.intro !== undefined ? props.intro : true)
    )
    const introLaunchTimeout = 7000
    const introDuration = 6200

    useEffect(() => {
        introLaunchTimeoutRef.current = setTimeout(() => setIntro(false), introLaunchTimeout)
        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener('resize', forceUpdate)
        return () => {
            clearTimeout(introLaunchTimeoutRef.current)
            clearTimeout(introFinishedTimeoutRef.current)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const introPlaying = () => {
        clearTimeout(introLaunchTimeoutRef.current)
        introFinishedTimeoutRef.current = setTimeout(() => setIntro(false), introDuration)
    }

    const handleKeyDown = e => {
        if (e.key === "Enter" || e.key === " " || e.key === "Escape")
            setIntro(false)
    }

    const margins = 100
    const scaler = Math.log1p(document.documentElement.clientWidth / 50) * 4.4
    const videoPositionX = 50
    const videoPositionY = 53
    const videoWidth = 36
    const videoHeight = 20
    const restScreenWidth = document.documentElement.clientWidth - videoWidth * scaler
    const restScreenHeight = document.documentElement.clientHeight - videoHeight * scaler
    const initialScroll = {
        x: -(videoPositionX * scaler - restScreenWidth / 2) - margins,
        y: -(videoPositionY * scaler - restScreenHeight / 2) - margins
    }

    const variants = {
        in: {
            x: "-6%",
            scale: 0.7,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        out: {
            opacity: 0,
            y: "60vh",
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <CanvasScroll
            scroll={initialScroll}
            scrollEnabled={props.scrollEnabled && !intro}
            reset={props.reset}
            canvasEnds={{ right: 157 * scaler + margins * 2, bottom: 190 * scaler + margins * 2 }}
            scrollSpeed={55}
            height={"100vh"}
            width={"100%"}
        >
            <div style={{ position: "relative", top: margins, left: margins }}>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <VideoIntro
                        fullscreen={intro}
                        videoWidth={videoWidth}
                        videoHeight={videoHeight}
                        videoPositionX={videoPositionX}
                        videoPositionY={videoPositionY}
                        initialScroll={initialScroll}
                        onCanPlay={introPlaying}
                        onClick={() => setIntro(false)}
                    />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <AdidasItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <StreetsItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <ComplexItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <FacesItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    <GiveAFuckItem />
                </motion.div>
                {/* <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <BudweiserItem />
                </motion.div> */}
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <LeConsulatItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <HavanaItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <AccorHotelsItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <SdmItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <Stylist1 />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Print />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <Vimsml />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.85, ease: "easeOut" }}
                >
                    <Cavani />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Blue />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Psg />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    <Stylist2 />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <Red />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.23, ease: "easeOut" }}
                >
                    <Filter />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.14, ease: "easeOut" }}
                >
                    <Collage />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <Yeux />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.1, ease: "easeOut" }}
                >
                    <Ichon />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Ofr />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.22, ease: "easeOut" }}
                >
                    <We />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.15, ease: "easeOut" }}
                >
                    <Offset />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <Girl />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    <VladimirItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <OboyItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.30, ease: "easeOut" }}
                >
                    <NikeItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 0.20, ease: "easeOut" }}
                >
                    <Koba />
                </motion.div>
            </div>
        </CanvasScroll>
    )
}

