import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({text = "Review App", bgColor = "#333333", textColor = "white"}) => {


    // const {text, bgColor, textColor} = props;

    // console.log(text);
    // console.log(bgColor);


    //   console.log(props);

    const headerStyle = {
        backgroundColor:bgColor,
        color:textColor
    }
    

  return (
    <header style={headerStyle}>
        <div className='container'>
            <div className='d-flex'>
              <Link to="/">
               <h1>{text}</h1>
               </Link>

              <Link className='link' to="/blog">Blog</Link>
              <Link className='link' to="/about">About</Link>
            </div>
        </div>
    </header>
  )
}

export default Header