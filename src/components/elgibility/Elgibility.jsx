import { IoNewspaperOutline,IoTimeSharp } from "react-icons/io5";
import { PiExamFill } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import "./style.css"

const elgibilityDetails = [{
    title:"Levels",
    icon:IoNewspaperOutline,
    description:"Three (13 papers)"
},{
    title:"Duration",
    icon:IoTimeSharp,
    description:"2:30 minutes"
},{
    title:"Exams",
    icon:PiExamFill,
    description:"Quartly exams"
},{
    title:"Exemptions",
    icon:MdDateRange,
    description:"upto 9 papers"
}]
const Elgibility = () => {
  return (
    <ul style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}} className="m-2">
      {
        elgibilityDetails.map((each)=>(
            <li key={each.title} className="card shadow px-5 py-1 m-1 text-center list-style" style={{width:"fit-content"}}>
                <h3 className="fs-5">{each.title}</h3>
                <p><span>{<each.icon/>}</span>{each.description}</p>
            </li>
        ))
      }
    </ul>
  )
}

export default Elgibility
