import React, { useState, useContext } from 'react'
import '../css/Comp1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faPersonChalkboard, faPersonCane, faPersonBreastfeeding, faUserTie, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import ProgressBar from './ProgressBar'

const Comp1 = () => {

    const navigate = useNavigate()
    const { bar, setBar } = useContext(Context);

    const [options, setOptions] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
        div6: false
    })

    const [btnStyle, setBtnStyle] = useState({
        backgroundColor: "#CCCCCC"
    })

    const [navi, setNavi] = useState(false)

    const [div, setDiv] = useState({
        border: "1px solid #CCCCCC"
    })

    const [selectedDiv, setSelectedDiv] = useState({
        border: "1px solid #FF6600"
    })

    const handleSelect = (id) => {
        setOptions({
            div1: false,
            div2: false,
            div3: false,
            div4: false,
            div5: false,
            div6: false,
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
                width: "20%"
            })
            navigate('/comp2')
        }
    }

    return (
        <>
            <ProgressBar />
            <div className='comp1'>
                <center>
                    <h1 data-aos="fade-down">Which describes you best?</h1>
                    <p data-aos="zoom-in">This will help us personalize your experience.</p>
                    <div data-aos="zoom-in-down" id='div1' style={options.div1 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div1")}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <p><b>Student</b> or soon to be enrolled</p>
                    </div>
                    <div data-aos="zoom-in-down" id='div2' style={options.div2 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div2")}>
                        <FontAwesomeIcon icon={faUserTie} />
                        <p><b>Professional</b> pursuing a career</p>
                    </div>
                    <div data-aos="zoom-in-down" id='div3' style={options.div3 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div3")}>
                        <FontAwesomeIcon icon={faPersonBreastfeeding} />
                        <p><b>Parent</b> of a school-age child</p>
                    </div>
                    <div data-aos="zoom-in-down" id='div4' style={options.div4 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div4")}>
                        <FontAwesomeIcon icon={faPersonCane} />
                        <p><b>Lifelong learner</b></p>
                    </div>
                    <div data-aos="zoom-in-down" id='div5' style={options.div5 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div5")}>
                        <FontAwesomeIcon icon={faPersonChalkboard} />
                        <p><b>Teacher</b></p>
                    </div>
                    <div data-aos="zoom-in-down" id='div6' style={options.div6 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div6")}>
                        <FontAwesomeIcon icon={faUser} />
                        <p><b>Other</b></p>
                    </div>
                    <br></br>
                    <button className='continue-btn' style={btnStyle} onClick={handleContinue}>Continue</button>
                </center>
            </div>
        </>
    )
}

export default Comp1