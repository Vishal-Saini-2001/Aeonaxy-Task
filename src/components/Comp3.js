import React, { useContext } from 'react'
import '../css/Comp3.css'
import comp3 from '../assets/comp3.svg'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import ProgressBar from './ProgressBar'


const Comp3 = () => {

    const navigate = useNavigate()
    const { bar, setBar } = useContext(Context);
    const handleContinue = () => {
        setBar({
            width: "60%"
        })
        navigate('/comp4')
    }

    return (
        <>
            <ProgressBar />
            <div className='comp3'>
                <div data-aos="fade-right" id='image'>
                    <img src={comp3}></img>
                </div>
                <div data-aos="zoom-in" id='content'>
                    <h1>You are in the right place</h1>
                    <p>Brilliant gets you hands-on to help improve your professional
                        skills and knowledge. You will interact with concepts and solve
                        fun problems in math, science, and computer science.
                    </p>
                </div>
            </div>
            <br></br>
            <center>
                <button className='comp3-continue-btn' onClick={() => handleContinue()}>Continue</button>
            </center>
        </>
    )
}

export default Comp3