import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Link, Grid} from "@material-ui/core"
import about from "./assets/about.mp4"
import Fade from "@material-ui/core/Fade"
import Player from "../../components/Player";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: "auto",
    },
    container: {
        height: "100%",
        "@media (max-width: 845px)": {
            paddingTop: theme.spacing(25),
        },
        "& .MuiTypography-root": {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: theme.spacing(5.8),
            lineHeight: 1,
            color: theme.palette.text.primary,
            "@media (max-width: 932px)": {
                fontSize: theme.spacing(4.8),
            },
            "@media (max-width: 600px)": {
                fontSize: theme.spacing(3.5),
            },
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            "& .MuiTypography-root": {
                paddingTop: theme.spacing(6),
            },
            "& span": {
                paddingBottom: theme.spacing(0.3),
                borderBottom: "2px solid white",
                "&:hover": {
                    borderBottom: "none"
                }
            }
        }
    },
    video: {
        transform: "rotate(-5deg)",
        maxWidth: "85%",
        margin: theme.spacing(1.2),
        position: "relative"
    },
    description: {
        margin: theme.spacing(6.2)
    }
}))

export default function Home(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={600}>
                <Grid container
                      className={classes.container}
                      justify="center"
                      alignItems="center"
                >
                    <Grid item md={4} style={{textAlign: "right", position: "relative"}}>
                        <Player src={about} alt={"Portrait"} width="300" className={classes.video}/>
                    </Grid>
                    <Grid item md={6} className={classes.description}>
                        <Typography>Remi Besse</Typography>
                        <Typography>Based in Paris</Typography>
                        <Typography>Director +</Typography>
                        <Typography>Photographer</Typography>
                        <Typography>Also run a</Typography>
                        <Typography>Photo revue</Typography>
                        <Typography>called scald</Typography>
                        <Link href="mailto:yo@remibesse.com" target="_blank">
                            <Typography><span>yo@remibesse.com</span></Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Fade>
        </div>
    )
}

