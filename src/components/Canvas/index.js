import { useRef, useEffect } from 'react'
import './styles.css'
import startAnimation from './canvas'

const Canvas = props => {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (canvasRef.current) {
            startAnimation()
        }
    }, [])

    return <canvas id="particle-canvas" ref={canvasRef} width="2880" height="76" {...props}/>
}

export default Canvas
