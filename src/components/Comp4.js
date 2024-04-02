import React, { useState, useContext } from 'react'
import math1 from '../assets/math1.jpeg'
import math2 from '../assets/math2.jpeg'
import math3 from '../assets/math3.jpeg'
import math4 from '../assets/math4.jpeg'
import '../css/Comp4.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import ProgressBar from './ProgressBar'

const Comp4 = () => {

    const navigate = useNavigate()
    const { bar, setBar } = useContext(Context);

    const [options, setOptions] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
    })

    const [btnStyle, setBtnStyle] = useState({
        backgroundColor: "#CCCCCC"
    })

    const [navi, setNavi] = useState(false)

    const [div, setDiv] = useState({
        border: "1px solid #CCCCCC"
    })

    const [selectedDiv, setSelectedDiv] = useState({
        border: "3px solid #FF6600"
    })

    const handleSelect = (id) => {
        setOptions({
            div1: false,
            div2: false,
            div3: false,
            div4: false,
            [id]: true
        })
        setBtnStyle({
            backgroundColor: "black"
        })

        setNavi(true)
    }

    const handleContinue = () => {
        if (navi) {
            setBar({
                width: "80%"
            })
            navigate('/comp5')
        }
    }

    return (
        <>
            <ProgressBar />
            <div className='comp4'>
                <center>
                    <h1 data-aos="fade-down">Which describes you best?</h1>
                    <p data-aos="zoom-in">This will help us personalize your experience.</p>
                </center>
                <div className='math-level'>
                    <div data-aos="flip-up" id='div1' onClick={() => handleSelect("div1")} style={options.div1 ? selectedDiv : div}>
                        <img src={math1}></img>
                        <h4>Arithmetic</h4>
                        <p>Introductory</p>
                    </div>
                    <div data-aos="flip-up" id='div2' onClick={() => handleSelect("div2")} style={options.div2 ? selectedDiv : div}>
                        <img src={math2}></img>
                        <h4>Basic Algebra</h4>
                        <p>Foundational</p>
                    </div>
                    <div data-aos="flip-up" id='div3' onClick={() => handleSelect("div3")} style={options.div3 ? selectedDiv : div}>
                        <img src={math3}></img>
                        <h4>Intermediate Algebra</h4>
                        <p>Intermediate</p>
                    </div>
                    <div data-aos="flip-up" id='div4' onClick={() => handleSelect("div4")} style={options.div4 ? selectedDiv : div}>
                        <img src={math4}></img>
                        <h4>Calculas</h4>
                        <p>Advanced</p>
                    </div>
                </div>
                <br></br>
                <center>
                    <button className='comp4-continue-btn' style={btnStyle} onClick={() => handleContinue()}>Continue</button>
                </center>
            </div>
        </>
    )
}

export default Comp4