import React from "react"
import { Link, useLocation } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    menu: {
        fontFamily: "'Helvetica', sans-setif",
        fontWeight: "bold",
        position: "absolute",
        top: theme.spacing(17),
        left: theme.spacing(20),
        zIndex: 1000,
        textTransform: "uppercase",
        transform: "rotate(180deg)",
        writingMode: "vertical-rl",
        "@media (max-width: 1100px)": {
            left: theme.spacing(12),
            top: theme.spacing(19),
        },
        "@media (max-width: 640px) and (pointer: coarse)": {
            left: theme.spacing(11),
            top: theme.spacing(19),
        },
        "@media (max-width: 600px) and (min-width: 550px) and (pointer: coarse)": {
            left: theme.spacing(9),
            top: theme.spacing(19),
        },
        "@media (max-width: 320px) and (pointer: coarse)": {
            left: theme.spacing(9),
            top: theme.spacing(18),
        },
        "& a": {
            textDecoration: "none",
        },
        "& .MuiTypography-root": {
            position: "absolute",
            fontSize: theme.spacing(3.5),
            "&:hover":{
                fontSize: theme.spacing(3.5 * 1.10)
            },
            color: "#000",
            transition: "all .2s",
            "@media (max-width: 1000px) and (pointer: coarse)": {
                fontSize: theme.spacing(3.2),
                "&:hover":{
                    fontSize: theme.spacing(3.2 * 1.10)
                },
            },
            "@media (max-width: 640px)": {
                fontSize: theme.spacing(2.5),
                "&:hover":{
                    fontSize: theme.spacing(2.5 * 1.10)
                },
            },
            "@media (max-width: 300px)": {
                fontSize: theme.spacing(2.2),
                "&:hover":{
                    fontSize: theme.spacing(2.2 * 1.10)
                },
            }
        }
    },
    typo: {
        fontWeight: "bold",
    },
    about: {
        top: theme.spacing(-2),
        left: theme.spacing(0),
        "@media (max-width: 640px)": {
            top: theme.spacing(0),
            left: theme.spacing(2)
        },
        "@media (max-width: 1000px) and (pointer: coarse)": {
            top: theme.spacing(0),
            left: theme.spacing(2)
        }
    },
    home: {
        top: theme.spacing(-2),
        left: theme.spacing(-4),
        "@media (max-width: 640px)": {
            top: theme.spacing(0),
            left: theme.spacing(-1),
        },
        "@media (max-width: 1000px) and (pointer: coarse)": {
            top: theme.spacing(0),
            left: theme.spacing(-2),
        }
    }
}))

export default function Nav(props) {
    const classes = useStyles()
    const fontStyle = { color: "#000" }
    const fontStyle2 = { color: "#fff" }
    const location = useLocation()

    return (
        <div className={classes.menu}>
            <Link to="/about">
                <Typography className={`${classes.about} ${classes.typo}`} style={location.pathname.startsWith("/home") || location.pathname === "/"? fontStyle2 : fontStyle}>About</Typography>
            </Link>
            <Link to={{ pathname: "/home" }}
                onPointerDown={() => props.setResetScroll(true)}
                onPointerUp={() => props.setResetScroll(false)}>
                <Typography className={`${classes.home} ${classes.typo}`} style={location.pathname.startsWith("/home") || location.pathname === "/" ? fontStyle2 : fontStyle}>Home</Typography>
            </Link>
        </div>
    )
}