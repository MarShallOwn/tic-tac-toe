import React from 'react'
import {Link} from 'react-router-dom'


const Main = () =>{

    return(
        <div className="link-box-container">
            <Link to='/multiplayer' className="link-box-text"><div id="multi" className="link-box">Multiplayer</div></Link>
            <Link to='/bot' className="link-box-text"><div className="link-box">Play Against Bot</div></Link>
        </div>
    )   
}


export default Main