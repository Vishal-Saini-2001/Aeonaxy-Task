import React, { useState, useContext } from 'react'
import { Context } from '../Context';

const ProgressBar = () => {
    const {bar, setBar} = useContext(Context);

    return (
        <center>
            <div id='progressbar'>
                <div style={bar} id='innerLine'></div>
            </div>
        </center>
    )
}

export default ProgressBar