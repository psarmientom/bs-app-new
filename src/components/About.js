import React from "react"

function About () {
    return(
        <>
        <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Heading</h2>
            <p className="w-lg-50">
              Curae hendrerit donec commodo hendrerit egestas tempus, turpis
              facilisis nostra nunc. Vestibulum dui eget ultrices.
            </p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="card">
              <img
                className="card-img-top w-100 d-block fit-cover"
                style={{height: "200px"}}
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="placeholder"
              />
              <div className="card-body p-4">
                <p className="text-warning card-text mb-0">Article</p>
                <h4 className="card-title">Lorem libero donec</h4>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                  elit non mi porta gravida at eget metus.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="placeholder"
                  />
                  <div>
                    <p className="fw-bold mb-0">John Smith</p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="card-img-top w-100 d-block fit-cover"
                style={{height: '200px'}}
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="placeholder"
              />
              <div className="card-body p-4">
                <p className="text-warning card-text mb-0">Article</p>
                <h4 className="card-title">Lorem libero donec</h4>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                  elit non mi porta gravida at eget metus.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="placeholder"
                  />
                  <div>
                    <p className="fw-bold mb-0">John Smith</p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="card-img-top w-100 d-block fit-cover"
                style={{height: 200}}
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="placeholder"
              />
              <div className="card-body p-4">
                <p className="text-warning card-text mb-0">Article</p>
                <h4 className="card-title">Lorem libero donec</h4>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                  elit non mi porta gravida at eget metus.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="placeholder"
                  />
                  <div>
                    <p className="fw-bold mb-0">John Smith</p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default About