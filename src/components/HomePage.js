import React from "react"


function HomePage () {
 
    return (
      <>
      <section className="py-4 py-xl-5"  style={{margin: '2rem 4rem'}}>
      <div className="container h-100">
        <div
          className="text-dark bg-warning bg-gradient border rounded border-0 p-4 py-5" style={{height: '58vh'}}>
          <div className="row h-100">
            <div
              className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center"
            >
              <div>
                <h1 className="text-uppercase fw-bold text-dark mb-3">
                  This is the Home Page
                </h1>
                <p className="mb-4">
                  Etiam a rutrum, mauris lectus aptent convallis. Fusce
                  vulputate aliquam, sagittis odio metus. Nulla porttitor
                  vivamus viverra laoreet, aliquam netus.
                </p>
                <button className="btn btn-light fs-5 py-2 px-4" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
    )
}

export default HomePage