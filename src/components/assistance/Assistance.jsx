const placementDetails = [{
    title:"Resume Building",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
},{
    title:"Career Counselling",
    description:"At magnam blanditiis inventore, officiis eveniet eligendi perspiciatis nihil? Voluptas eaque nobis exercitationem repudiandae nisi in dolore illum? Corrupti ipsum numquam voluptatum."
},{
    title:"Jobs",
    description:"Lorem ipsum dolor sit amet consectetur"
}]
const Assistance = () => {
  return (
    <div className=" m-3 p-3 shadow" style={{backgroundColor:"#EFD9F1",borderRadius:"15px"}}>
      <h1 className="fs-3 text-center m-3 fw-bold">100% Place<span style={{borderBottom:"5px solid #1F1298"}}>ment</span> Assistance</h1>
      <ul style={{listStyle:"none"}}>
        {
            placementDetails.map((each)=>(
                <li key={each.title}>
                    <h3 className=" fs-5 fw-bold">{each.title}</h3>
                    <p className="fs-6">{each.description}</p>
                </li>
            ))
        }
      </ul>
      
    </div>
  )
}

export default Assistance
