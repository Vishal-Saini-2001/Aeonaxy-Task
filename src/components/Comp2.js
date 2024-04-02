import React, { useContext, useState } from 'react'
import '../css/Comp1.css'
import { Context } from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faBrain, faMagnifyingGlass, faPercent, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const Comp2 = () => {

  const navigate = useNavigate()
  const { bar, setBar } = useContext(Context);

  const [options, setOptions] = useState({
    div1: false,
    div2: false,
    div3: false,
    div4: false,
    div5: false,
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
        width: "40%"
      })
      navigate('/comp3')
    }
  }

  return (

    <>
      <ProgressBar />
      <div className='comp2'>
        <center>
          <h1 data-aos="fade-down">Which are you most interested in?</h1>
          <p data-aos="zoom-in">Choose just one. This will help us get you started.</p>
          <div data-aos="zoom-in-down" id='div1' style={options.div1 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div1")}>
            <FontAwesomeIcon icon={faChartLine} />
            <p>Learning specific skills to advance my career</p>
          </div>
          <div data-aos="zoom-in-down" id='div2' style={options.div2 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div2")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Exploring new topics I am interested in</p>
          </div>
          <div data-aos="zoom-in-down" id='div3' style={options.div3 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div3")}>
            <FontAwesomeIcon icon={faPercent} />
            <p>Refreshing my math foundations</p>
          </div>
          <div data-aos="zoom-in-down" id='div4' style={options.div4 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div4")}>
            <FontAwesomeIcon icon={faBrain} />
            <p>Exercising my brain to stay sharp</p>
          </div>
          <div data-aos="zoom-in-down" id='div5' style={options.div5 ? selectedDiv : div} className='comp1-div' onClick={() => handleSelect("div5")}>
            <FontAwesomeIcon icon={faFaceSmile} />
            <p>Something else</p>
          </div>
          <br></br>
          <button className='continue-btn' style={btnStyle} onClick={handleContinue}>Continue</button>
        </center>
      </div>
    </>
  )
}

export default Comp2