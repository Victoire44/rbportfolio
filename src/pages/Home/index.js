import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
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
import Portrait from "../../components/projects/Portrait"
import Gato from "../../components/projects/Gato"
import Street from "../../components/projects/Street"
import Street1 from "../../components/projects/Street1"
import Sdm1 from "../../components/projects/Sdm1"
import Intro from "../../components/projects/Intro"
import Trot from "../../components/projects/Trot"
import City from "../../components/projects/City"
import Lacoste1 from "../../components/projects/Lacoste1"
import Complex1 from "../../components/projects/Complex1"
import Scald from "../../components/projects/Scald"
import Red from "../../components/projects/Red"
import Vimsml from "../../components/projects/Vimsml"
import PsgJordan from "../../components/projects/PsgJordan"
import background from "./assets/background.jpg"
import { motion } from "framer-motion"

function useForceUpdate() {
    const [, setValue] = useState(0)
    return () => setValue(value => ++value)
}

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        // height: "110%",
        // width: "110%",
        position: "absolute",
        top: "-50vh",
        bottom: "-50vh",
        left: "-50vw",
        right: "-50vw",
        // padding: 0,
        // margin: 0,
        // boxSizing: "border-box",
        // overflow: "hidden",
    }
}))

export default function Home(props) {
    const forceUpdate = useForceUpdate()
    const classes = useStyles()

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
            width={"100%"}
            background={background}
        >
            <div className={classes.background}></div>
            <div style={{ position: "relative", top: margins, left: margins }}>
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
                    <Portrait />
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
                    <Street1 />
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
                    <Sdm1 />
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
                    <Complex1 />
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

