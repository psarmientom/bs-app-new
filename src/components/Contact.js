import React from "react"

function Contact (){
    return(
        <div className="container" style={{width: "60%", marginTop: 104}}>
        <h1>Contact Us</h1>
        <form>
          <label className="form-label">Name</label
          ><input className="form-control" type="text" /><label className="form-label"
            >Email</label
          ><input className="form-control" type="text" /><label className="form-label"
            >Message</label
          ><textarea className="form-control"></textarea
          ><button
            className="btn btn-warning btn-lg"
            type="submit"
            style={{maxWidth: 200, width: 200, marginTop: 51}}
          >
            Button
          </button>
        </form>
      </div>
    )
}

export default Contact