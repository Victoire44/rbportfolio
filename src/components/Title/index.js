import React from "react"
import {Frame} from "framer"
import {makeStyles} from "@material-ui/core/styles"
import { useLocation } from "react-router-dom"

const useStyles = makeStyles(theme =>({
    fontSize: {
        fontFamily: "'Helvetica', sans-setif",
        fontSize: theme.spacing(4),
        fontWeight: "bold",
        color: "#fff",
        "@media (max-width: 1000px) and (pointer: coarse) and (orientation: landscape)": {
            fontSize: theme.spacing(3)
        },
        "@media (max-width: 640px)": {
            fontSize: theme.spacing(3)
        },
        "@media (max-width: 450px)": {
            fontSize: theme.spacing(2.5)
        },
        "@media (max-width: 350px)": {
            fontSize: theme.spacing(2)
        }
    }
}))

export default function Title() {
    const classes = useStyles()
    const fontStyle = { color: "#000" }
    const fontStyle2 = { color: "#fff" }
    const location = useLocation()

    const containerVariants = {
        before: {},
        after: {transition: {staggerChildren: 0.15}},
    }

    return (
        <Frame
            center={"x"}
            top={"3vh"}
            width={"auto"}
            height={32}
            background={""}
            variants={containerVariants}
            style={{
                textTransform: "uppercase",
                color: "#000",
                display: "flex",
                zIndex: 1300
            }}
            className={classes.fontSize}
            initial={"before"}
            animate={"after"}
        >
        <div className={`${classes.about} ${classes.typo}`} style={location.pathname.startsWith("/home") || location.pathname === "/"? fontStyle2 : fontStyle}>Remi Besse</div>
        </Frame>
    )
}