import React, { useState, useEffect } from "react"
import CanvasScroll from "../../components/CanvasScroll"
import { AdidasItem } from "../../components/projects/Adidas"
import { OverallItem } from "../../components/projects/Overall"
import { BreatheItem } from "../../components/projects/Breathe"
import { EtudesItem } from "../../components/projects/Etudes"
import { FacesItem } from "../../components/projects/Faces"
import { MoleskineItem } from "../../components/projects/Moleskine"
import { RasItem } from "../../components/projects/Ras"
import { LalaItem } from "../../components/projects/Lala"
import { LacosteItem } from "../../components/projects/Lacoste"
import Koba from "../../components/projects/Koba"
import Child from "../../components/projects/Child"
import Gradient from "../../components/projects/Gradient"
import Yellow from "../../components/projects/Yellow"
import Palace from "../../components/projects/Palace"
import Gold from "../../components/projects/Gold"
import Oboy from "../../components/projects/Oboy"
import Gato from "../../components/projects/Gato"
import Street from "../../components/projects/Street"
import Belleville from "../../components/projects/Belleville"
import Sdm from "../../components/projects/Sdm"
import Intro from "../../components/projects/Intro"
import Trot from "../../components/projects/Trot"
import City from "../../components/projects/City"
import Lacoste1 from "../../components/projects/Lacoste1"
import Complex from "../../components/projects/Complex"
import Scald from "../../components/projects/Scald"
import Red from "../../components/projects/Red"
import Vimsml from "../../components/projects/Vimsml"
import PsgJordan from "../../components/projects/PsgJordan"
import SelfPortrait from "../../components/projects/SelfPortrait"
import { motion } from "framer-motion"
import CanvasItem from "../../components/CanvasItem"
import Background from "../../components/Background"
import Image from "../../components/Image"

function useForceUpdate() {
    const [, setValue] = useState(0)
    return () => setValue(value => ++value)
}

export default function Home(props) {
    const forceUpdate = useForceUpdate()

    useEffect(() => {
        window.addEventListener('resize', forceUpdate)
        return () => {
        }
    }, [])

    const margins = 0
    const scaler = Math.log1p(document.documentElement.clientWidth / 50) * 4.4
    const initialScroll = {
        x: -margins,
        y: -margins
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
            scrollEnabled={props.scrollEnabled}
            reset={props.reset}
            canvasEnds={{ right: 128 * scaler + margins * 2, bottom: 210 * scaler + margins * 2 }}
            scrollSpeed={55}
            height={"100vh"}
            width={"100vw"}
        >
            <Background scrollSpeed={25}></Background>
            <div style={{ position: "relative", top: margins, left: margins }}>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.4, ease: "easeOut" }}
                >
                    <SelfPortrait />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.7, ease: "easeOut" }}
                >
                    <PsgJordan />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.3, ease: "easeOut" }}
                >
                    <OverallItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <EtudesItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.4, ease: "easeOut" }}
                >
                    <BreatheItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.4, ease: "easeOut" }}
                >
                    <AdidasItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.4, ease: "easeOut" }}
                >
                    <Child />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.3, ease: "easeOut" }}
                >
                    <Red />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.4, ease: "easeOut" }}
                >
                    <Gradient />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.1, ease: "easeOut" }}
                >
                    <MoleskineItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Yellow />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.3, ease: "easeOut" }}
                >
                    <RasItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.4, ease: "easeOut" }}
                >
                    <Palace />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.6, ease: "easeOut" }}
                >
                    <Gold />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <LalaItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.6, ease: "easeOut" }}
                >
                    <Oboy />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.4, ease: "easeOut" }}
                >
                    <Gato />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Street />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.3, ease: "easeOut" }}
                >
                    <Belleville />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.55, ease: "easeOut" }}
                >
                    <Vimsml />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.3, ease: "easeOut" }}
                >
                    <FacesItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.1, ease: "easeOut" }}
                >
                    <Sdm />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Koba />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.35, ease: "easeOut" }}
                >
                    <City />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.1, ease: "easeOut" }}
                >
                    <LacosteItem />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Complex />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Scald />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Intro />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.1, ease: "easeOut" }}
                >
                    <Lacoste1 />
                </motion.div>
                <motion.div position={"relative"} size={"100%"}
                    variants={variants}
                    initial="in"
                    animate="animate"
                    exit="out"
                    transition={{ duration: 1.4, ease: "easeOut" }}
                >
                    <Trot />
                </motion.div>
            </div>
        </CanvasScroll>
    )
}

