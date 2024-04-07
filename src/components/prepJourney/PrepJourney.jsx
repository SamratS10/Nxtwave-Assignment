import "./style.css"

const PrepJourney = () => {
  return (
    <div className="about-container m-3">
      <div className="box-1">
        <h1 className="fw-bold fs-2">kick off your ACCA Prep Journey with IndigoLeran</h1>
        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Explore More
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
        </div>
      </div>
      <div className="input-container shadow">
                <h1 className="fs-5 text-center">Apply to an NCCA? Get in touch with us</h1>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                <input type="email" className="form-control mt-2" placeholder="Email" aria-label="Email Id" aria-describedby="basic-addon1"></input>
                <input type="text" className="form-control mt-2" placeholder="contact" aria-label="Contact" aria-describedby="basic-addon1"></input>
                <input type="text" className="form-control mt-2" placeholder="domain" aria-label="Domain" aria-describedby="basic-addon1"></input>
                <button type="button" className="btn m-1 w-100" style={{backgroundColor:"#1037B7",color:"white"}}>Request Call Back</button>
            </div>
    </div>
  )
}

export default PrepJourney
