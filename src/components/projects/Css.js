import { makeStyles } from "@material-ui/core/styles"

const Css = makeStyles(theme => ({
    /*Home Page*/
    item: {
        "&:hover": {
        zIndex: 1000,
        }
     },
    cover: {
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.04)",
        }
    },
    positionImage: {
        position: "absolute",
        margin: "auto",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        maxWidth: "100%",
        maxHeight: "100%",
        visibility: "hidden"
    },
    video: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundColor: "black"
    },
    /*image in the Modal*/
    zoomedImage: {
        maxHeight: "100%",
        maxWidth: "100%",
        height: "auto",
        width: "auto",
        pointerEvents: "auto",
        "@media only screen and (max-width: 600px)": {
            maxHeight: "90vh"
        }
    },
    /*Video in the Modal*/
    videoWrapper: {
        position: "relative",
        pointerEvents: "auto",
        paddingBottom: "56.25%",
        paddingTop: theme.spacing(3.1),
        height: 0,
        minWidth: "65vw",
        "@media (max-width: 600px)": {
            width: "100vw",
        },
        "& iframe": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        },
    },
    caption: {
        pointerEvents: "none",
        "& .MuiTypography-root": {
            pointerEvents: "none",
            fontSize: "0.8em",
            lineHeight: 1.2,
            fontFamily: "'Helvetica', sans-setif",
            textTransform: "uppercase",
            color: "#fff",
            "@media (max-width: 1100px)": {
                fontSize: "0.7em"
            },
            "&:first-child": {
                fontSize: "1em",
                "@media (max-width: 1100px)": {
                    fontSize: "0.9em"
                },
                padding: theme.spacing(1, 0),
                fontFamily: "'Helvetica', sans-setif",
            },
        }
    }
}))

export default Css