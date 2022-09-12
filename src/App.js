import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Route, Switch, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav"
import Project from "./components/Project"
import Title from "./components/Title"
import CursorProvider from "./components/Cursor"
import "bootstrap/dist/css/bootstrap.min.css"
import Favicon from "./favicon.png"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
})

const useStyles = makeStyles(theme => ({
    body: {
        boxSizing: "border-box",
        overflow: "hidden",
        padding: 0,
        margin: 0,
    }
}))

export default function App() {
    const [resetScroll, setResetScroll] = useState(false)   
    const location = useLocation()
    const lastSlash = location.pathname.indexOf("/", 1)
    const page = location.pathname.substring(0, lastSlash === -1 ? location.pathname.length : lastSlash).replace("/home", "/")
    const classes = useStyles()

    return (
        <ThemeProvider theme={darkTheme}>
            <CursorProvider>
                <Helmet>
                    <link rel="icon" type="image/png" href={Favicon} />
                    <title>Remi Besse</title>
                    <meta name="author" content="Victoire Baron <victoirebaron@hotmail.fr>" />
                    <meta property="og:type" content="website" />
                    <meta name="description" content="REMI BESSE Film director based in Paris." />
                    <body className={classes.body} />
                </Helmet>
                <Nav setResetScroll={setResetScroll} />
                <Title />
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={page}>
                        <Route exact path={["/home/:id", "/home", "/"]}
                            render={props => <Projects
                                match={props.match}
                                reset={resetScroll} />}
                        />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </AnimatePresence>
            </CursorProvider>
        </ThemeProvider>
    )
}

function Projects({ match, reset }) {
    const { id } = match.params

    return (
        <div key="page/projects">
            <AnimateSharedLayout type="crossfade">
                <Home reset={reset} scrollEnabled={!id} />
                {id && <Project id={id} />}
            </AnimateSharedLayout>
        </div>
    )
}
