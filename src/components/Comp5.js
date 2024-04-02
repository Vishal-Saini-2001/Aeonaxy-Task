import React, { useContext } from 'react'
import comp5 from '../assets/comp5.svg'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from './ProgressBar'

const Comp5 = () => {
    const navigate = useNavigate()
    const { bar, setBar } = useContext(Context);
    const handleContinue = () => {
        setBar({
            width: "100%"
        })
        navigate('/comp6')
    }
    return (
        <>
            <ProgressBar />
            <div className='comp3'>
                <div data-aos="fade-right" id='image'>
                    <img src={comp5}></img>
                </div>
                <div data-aos="fade-left" id='content'>
                    <h1>You are on your way</h1>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <p>
                        <i>
                            "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations"
                            <br></br>
                            -Jacob S.
                        </i>
                    </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <center>
                <button className='comp3-continue-btn' onClick={() => handleContinue()}>Continue</button>
            </center></>
    )
}

export default Comp5