import React, {useState, useRef, useEffect} from "react"
import {Scroll, Frame} from "framer"

export default function CanvasScroll(props) {
    const wrapperRef = useRef()
    const animationRef = useRef()
    const scrollEnabled = props.scrollEnabled !== undefined ? props.scrollEnabled : true
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    const initialScroll = props.scroll !== undefined ? props.scroll : {x: 0, y: 0}
    const [scroll, unsafeSetScroll] = useState(initialScroll)
    const setScroll = ({x, y}) => {
        const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
        unsafeSetScroll({
            x: clamp(x, -props.canvasEnds.right + wrapperRef.current.offsetWidth, 0),
            y: clamp(y, -props.canvasEnds.bottom + wrapperRef.current.offsetHeight, 0)
        })
    }

    useEffect(() => {
        setAutoScrollEnabled(false)
        setScroll(initialScroll)
    }, [props.reset])

    const handleMove = e => {
        e.preventDefault()
        switch (e.pointerType) {
            case "mouse":
                setAutoScrollEnabled(true)
                setMousePosition({x: e.clientX, y: e.clientY})
                break
            case "touch":
                setAutoScrollEnabled(false)
                break
            default:
        }
    }

    useEffect(() => {
        animationRef.current = requestAnimationFrame(scrollMouseAnimation)
        return () => cancelAnimationFrame(animationRef.current)
    })

    const scrollMouseAnimation = () => {
        if (scrollEnabled && autoScrollEnabled && wrapperRef.current != null) {
            const scrollReducer = (props.scrollSpeed !== undefined ? props.scrollSpeed : 55) / 4000
            const translate = {
                x: (wrapperRef.current.offsetWidth / 2) - mousePosition.x,
                y: (wrapperRef.current.offsetHeight / 2) - mousePosition.y
            }

            setScroll({
                x: scroll.x + translate.x * scrollReducer,
                y: scroll.y + translate.y * scrollReducer
            })
            animationRef.current = requestAnimationFrame(scrollMouseAnimation)
        }
    }

    return (
        <Frame ref={wrapperRef} onPointerMove={handleMove} background={""} height={props.height} width={props.width}>
            <Scroll
                wheelEnabled={false}
                dragEnabled={!autoScrollEnabled}
                onDrag={() => setAutoScrollEnabled(false)}
                onScrollStart={info => {
                    setScroll({x: info.point.x - 0.000000001, y: info.point.y - 0.000000001})
                }}
                scrollAnimate={scroll}
                contentOffsetX={initialScroll.x}
                contentOffsetY={initialScroll.y}
                contentWidth={props.canvasEnds.right}
                contentHeight={props.canvasEnds.bottom}
                height="100%" width="100%"
                direction="both"
            >
                {props.children}
            </Scroll>
        </Frame>
    )
}