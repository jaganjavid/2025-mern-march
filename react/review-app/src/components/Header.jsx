import { Link } from "react-router-dom";



const Header = ({ text = "Review app", bgColor = "blue", textColor = "white" }) => {


  const headerStyle = { backgroundColor: bgColor, color: textColor }


  return (
    <header style={headerStyle}>
      <div className="container">
       <div className="flex">
        <Link to="/">
         <h4>{text}</h4>
        </Link>
        <Link to="/about">About Page</Link>
       </div>
        {/* <p>Dark</p> */}
      </div>
    </header>
  );
};


export default Header;
