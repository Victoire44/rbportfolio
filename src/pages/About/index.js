import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link, Grid } from "@material-ui/core"
import about from "./assets/about.jpg"
import { motion } from "framer-motion"
import aboutBackground from "./assets/aboutbackground.jpg"

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: "100% 100%",
        height: "100vh",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        overflow: "hidden",
        "& .MuiLink-root": {
            textDecoration: "none",
            color: "#000"
        },
        // overflow: "scroll",
        display: "flex",
        alignItems: "center",
    },
    smallTypo: {
        fontSize: "1.5vw",
        "@media (max-width: 1020px)": {
            fontSize: "2vw",
        },
        "@media (max-width: 640px)": {
            fontSize: "3.6vw",
        },
        "@media (max-width: 700px) and (orientation: landscape) and (pointer: coarse)": {
            fontSize: "1.8vw",
        },
    },
    typography: {
        fontFamily: "'Helvetica', sans-setif",
        textTransform: "uppercase",
        lineHeight: 1,
        color: "#000",
        fontSize: "2vw",
        fontWeight: "bold",
        "@media (max-width: 1020px)": {
            fontSize: "2.5vw",
        },
        "@media (max-width: 640px)": {
            fontSize: "4.1vw",
        },
        "@media (max-width: 700px) and (orientation: landscape) and (pointer: coarse)": {
            fontSize: "2.3vw",
        },

    },
    marginTop: {
        marginTop: "8%",
    },
    email: {
        display: "inline-block",
    },
    link: {
        position: "relative",
        "&:after": {
            content: '""',
            position: "absolute",
            display: "block",
            width: "100%",
            height: "1px",
            marginTop: theme.spacing(0.4),
            borderRadius: "4px",
            background: "#000",
            transform: "scale(1)",
            transition: "transform .30s",
            transformOrigin: "bottom left"

        },
        "&:hover:after": {
            transform: "scale(0)",
            transformOrigin: "bottom left",
            "@media (pointer: coarse)": {
                display: "none",
            },
        },
    },
    description: {
        margin: theme.spacing(6.2)
    },
    gridImage: {
        "@media (max-width: 615px) and (pointer: coarse)": {
            display: "none",
        },
        "@media (max-width: 1000px) and (orientation: landscape) and (pointer: coarse)": {
            display: "none",
        },
    },
    responsiveImage: {
        width: "20vw",
        "@media (max-width: 800px)": {
            width: "38vw",
        },
    }
}))

export default function About() {
    const classes = useStyles();

    const variants = {
        initialVideo: {
            opacity: 0,
            x: "4%"
        },
        initialDescription: {
            opacity: 0,
            x: "-4%"
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                ease: "easeOut",
                duration: "0.3"
            }
        },
        out: {
            opacity: 0,
            y: "20%",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }

    return (
        <div key="page/about" className={classes.root}>
            <Grid container
                justify="center"
                alignItems="center"
            >
                <Grid item md={4.5} style={{ textAlign: "right", position: "relative" }} className={classes.gridImage}>
                    <motion.div position={"relative"} size={"100%"}
                        variants={variants}
                        initial="initialVideo"
                        animate="animate"
                        exit="out"
                    >
                        <img src={about} alt="Portrait" className={classes.responsiveImage} />
                    </motion.div>
                </Grid>
                <Grid item md={5.5} className={classes.description}>
                    <motion.div position={"relative"} size={"100%"}
                        variants={variants}
                        initial="initialDescription"
                        animate="animate"
                        exit="out"
                        className={classes.typography}
                    >
                        <div>Representation</div>
                        <Link href="https://iconoclast.tv/fr/remi-besse" target="_blank" className={classes.link}>ICONOCLAST.TV</Link>
                        <div className={classes.smallTypo}>
                            <div className={classes.marginTop}>Also run a</div>
                            <div>collective photo revue</div>
                            <div>called <Link href="https://scaldconnexion.org/" target="_blank" className={classes.link} style={{ display: "inline-block" }}> scald</Link></div>
                        </div>
                        <Link href="mailto:enquiries@remibesse.com" target="_blank" className={`${classes.email} ${classes.marginTop} ${classes.link}`}>
                            <div>enquiries@remibesse.com</div>
                        </Link>
                        <div className={`${classes.marginTop} ${classes.smallTypo}`}>©2022 Remi Besse</div>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    )
}
