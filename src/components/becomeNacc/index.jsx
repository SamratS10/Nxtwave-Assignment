import "./style.css"
import { MdFilePresent } from "react-icons/md";
import { PiStudentFill,PiChalkboardTeacherBold } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
const details = [{
    title:"Representative",
    icon:MdFilePresent,
    total:"1234"
},{
    title:"No.of students",
    icon:PiStudentFill,
    total:"45,678"
},
{
    title:"Total Staff",
    icon:GoOrganization,
    total:"1234"
},{
    title:"Faculty",
    icon:PiChalkboardTeacherBold,
    total:578
}]

const AboutNcca = ()=>{
    return(
        <div className="about-container">
            <div className="box-1">
            <h1 className="fw-bold fs-2">Become NAAC in 18 months</h1>
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit autem quisquam itaque iure veniam reiciendis laboriosam asperiores tempora odit assumenda.</p>
            <ul className="ncca-card">
                {
                    details.map((each)=>(
                        <li key={each.title} className="card" style={{width:"140px",height:"60px",textAlign:"center",margin:"10px"}}>
                            <h3 style={{fontSize:"16px",color:"#4C10B7",fontWeight:"Bold"}}><span style={{fontSize:"22px"}}>{<each.icon/>}</span>{each.title}</h3>
                            <p className="text-dark">{each.total}</p>
                        </li>
                    ))
                }
            </ul>
            <div>
                <button type="button" className=" btn btn-primary m-2">
                    Explore
                </button>
                <button type="button" className=" btn btn-danger">
                    Watch demo
                </button>
            </div>
            </div>
            <div className="input-container shadow">
                <h1 className="fs-5 text-center">Apply for NCCA? Get in touch with us</h1>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                <input type="email" className="form-control mt-2" placeholder="Email" aria-label="Email Id" aria-describedby="basic-addon1"></input>
                <input type="text" className="form-control mt-2" placeholder="contact" aria-label="Contact" aria-describedby="basic-addon1"></input>
                <input type="text" className="form-control mt-2" placeholder="domain" aria-label="Domain" aria-describedby="basic-addon1"></input>
                <button type="button" className="btn m-1 w-100" style={{backgroundColor:"#1037B7",color:"white"}}>Call Back</button>
            </div>
        </div>
    )
}

export default AboutNcca