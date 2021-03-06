import React from 'react'
import {Link} from 'react-router-dom'


const Header = ({children}) => {

    const style = {
        display: 'inline-block',
        margin: "10px 20px",
        marginBottom: "1.5em" ,
        fontSize: "4vh"
    };

    return(
        <div>
            <Link to='/tic-tac-toe'>Back Home</Link>
            <div style={{textAlign: "center"}}>
                <h3 style={style}><Link to='/tic-tac-toe/multiplayer'>Multiplayer</Link></h3>
                <h3 style={style}><Link to='/tic-tac-toe/bot'>Play Against Bot</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Header;