import "./style.css"
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiTeacher } from "react-icons/gi";
import { FaDiagramSuccessor } from "react-icons/fa6";
const cardDetails =[{
    title:"Expert Faculty",
    icon:HiOutlineLightBulb,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
},{
    title:"Complete Success Package",
    icon:GiTeacher,
    description:"exercitationem ullam laudantium sapiente, beatae possimus nemo"
},{
    title:"Placements",
    icon:FaDiagramSuccessor,
    description:"Et harum, exercitationem ullam laudantium sapiente, beatae"
}]
const ChooseUs = () => {
  return (
    <div className="mt-3">
        <div className=" text-center">
        <h1 className=" fs-2 text-center choose-us-heading" style={{fontWeight:"700"}}>Why Choose Us?</h1>
        </div>
        <ul style={{listStyle:"none"}} className="choose-us-cards">
            {
                cardDetails.map((each)=>(
                    <li key={each.title} className="card m-2 p-2 shadow" style={{width:"200px",backgroundColor:"#e5f0f8"}}>
                        <span className="text-center fs-3" style={{color:"#1F1298"}}>{<each.icon/>}</span>
                        <h3 className="text-center fs-4" style={{color:"#1F1298"}}>{each.title}</h3>
                        <p className="text-center">{each.description}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ChooseUs
