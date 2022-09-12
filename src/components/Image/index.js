import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import { motion } from "framer-motion"

const useStyles = makeStyles({
    root: {
        background: "black, 0.7",
        height: "100%",
        "& img":{
            width: "100%"
        }
    },
})


export default function Image(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <motion.img {...props} onContextMenu={e => e.preventDefault()} loading="lazy"/>
        </div>
    )
}