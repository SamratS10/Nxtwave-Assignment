import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css"
import { useState } from "react";
const headerText = ["Home","Qualifications","Members","Students",]

const Header = () => {
    const [toggleNavbar,setToggleNavbar] = useState(false)

    const handleClick=()=>{
        setToggleNavbar(!toggleNavbar)
}
  return (
    <div className="header">
      <div className="header-left">
        <div className="heading">
            <div>
                <RxHamburgerMenu onClick={handleClick} color="white" style={{fontSize:"22px"}} className="hamburger"/>
            </div>
            <h3>
                ACCA
            </h3>
            <p style={{marginTop:"10px"}}>Think Ahead</p>
        </div>
        <ul className={`${toggleNavbar ? "menu" : "activeNavbar"}`}>
        {
            headerText.map((each)=>(
                <li key={each} className="list-items">
                    {each}
                </li>
            ))
        }
      </ul>
      </div>  
      <ul className=" header-text">
        {
            headerText.map((each)=>(
                <li key={each}>
                    {each}
                </li>
            ))
        }
      </ul>
      <div>
        <button type="button" className="btn btn-light">
            Apply Now
        </button>
      </div>
    </div>
  )
}

export default Header
