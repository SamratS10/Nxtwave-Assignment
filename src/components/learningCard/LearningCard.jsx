import "./style.css"
const cardDetails =[{
    title:"Knowledge Level",
    description:["Lorem ipsum, dolor sit amet consectetur adipisicing elit","Lorem ipsum, dolor sit amet consectetur adipisicing elit","Lorem ipsum, dolor sit amet consectetur adipisicing elit"],
    bottomTitle:"3 Papers"
},{
    title:"Skill Level",
    description:["Voluptatem repudiandae, praesentium perferendis cupiditate","Voluptatem repudiandae, praesentium perferendis cupiditate","Voluptatem repudiandae, praesentium perferendis cupiditate","Voluptatem repudiandae, praesentium perferendis cupiditate","Voluptatem repudiandae, praesentium perferendis cupiditate","Voluptatem repudiandae, praesentium perferendis cupiditate"],
    bottomTitle:"6 papers"
},{
    title:"Proffesional Level",
    description:["Lorem ipsum, dolor sit amet consectetur adipisicing elit","Lorem ipsum, dolor sit amet consectetur adipisicing elit"],
    firstTitle:"Category",
    secondTitle:"Two out of the following",
    secondDescription:["Voluptatem repudiandae, praesentium perferendis cupiditate","Voluptatem repudiandae, praesentium perferendis cupiditate","Voluptatem repudiandae, praesentium perferendis cupiditate","Voluptatem repudiandae, praesentium perferendis cupiditate"],
    bottomTitle:"4 papers"
}]

const LearningCard = () => {
  return (
    <div className="mt-3">
      <h1 className="text-center fs-2 fw-bold">What will y<span style={{borderBottom:"5px solid #1F1298"}}>ou Learn</span> in ACCA?</h1>
      <ul className="learning-card-box">
        {
            cardDetails.map((each)=>(
                <li key={each.title} className="card m-2 shadow" style={{width:"320px",height:"fit-content",backgroundColor:"#e5f0f8"}}>
                    <h1 className="fs-4 text-center text-white p-2" style={{backgroundColor:"#1037B7"}}>{each.title}</h1>
                    {each.firstTitle ? <h3 className="fs-5 px-2 fw-bold">{each.firstTitle}</h3> :""}
                    {
                        each.description.map((item,index)=>(
                            <p key={index} className="fs-6 px-3">*{item}</p>
                        ))
                    }
                    {each.secondTitle ? <h3 className="fs-5 px-2 fw-bold">{each.secondTitle}</h3> :""}
                    {
                        each.secondDescription ? (
                            each.secondDescription.map((item,index)=>(
                                <p key={index} className="px-3">*{item}</p>
                            ))
                        ):""
                    }
                    <h2 className="text-center fs-4 text-white p-2" style={{backgroundColor:"#1037B7"}}>{each.bottomTitle}</h2>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default LearningCard
