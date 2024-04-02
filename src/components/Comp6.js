import React from 'react'
import img from '../assets/course.svg'
import '../css/Comp6.css'

const Comp6 = () => {
    return (
        <div className='comp6'>
            <center>
                <h1 data-aos="fade-down">Learning paths based on your answers</h1>
                <p data-aos="zoom-in">Choose one to get started. You can switch anytime.</p>
            </center>
            <div id='courses'>
                <div data-aos="zoom-out">
                    <div id='tag'>Most Popular</div>
                    <div className='course'>
                        <p><b>Foundational Math</b> Build your foundational skills in algebra, geometry, and probability.</p>
                        <img src={img}></img>
                    </div>
                </div>
                <div data-aos="zoom-out" className='course'>
                    <p><b>Mathematical Thinking</b> Build your thinking skills in algebra, geometry, and probability.</p>
                    <img src={img}></img>
                </div>
            </div>
        </div>
    )
}

export default Comp6