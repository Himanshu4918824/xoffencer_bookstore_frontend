import book from "../../../assets/book.png";

export default function Hero() {

  const bookData = [{tag: "BOOK OF THE MONTH", title: "The Midnight Library",description:"Between life and death there is a library. Discover the extraordinary journey of Nora Seed as she explores the lives she could have lived.",author: "Matt Haig",image: book},
      
  ];

  return (
    <div className="py-5" style={{ background: "#f7f4ef", minHeight: "450px" }} >
      <div className="container">
        {bookData.map((item, i) => (
          <div key={i} className="row align-items-center">

            
            <div className="col-md-6">
              <span className="badge mb-3"  style={{ background: "#e6edff", color: "#3b5cff", letterSpacing: "1px"}}>
                {item.tag}
              </span>

              <h1 className="fw-bold display-5 mt-3">
                {item.title}
              </h1>

              <p className="text-muted mt-3">
                {item.description}
              </p>

              <p className="fst-italic text-muted">
                — {item.author}
              </p>

              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary px-4">
                  Add to Cart →
                </button>

                <button className="btn btn-light border px-4">
                  Preview Chapter
                </button>
              </div>
            </div>

        
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <div style={{ background: "#0b2c3d", display: "inline-block", padding: "20px", borderRadius: "6px"}}>
                <img src={item.image} alt="book" className="img-fluid" style={{ maxHeight: "380px" }}/>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}


{/*
     const bookData = [
    {
      tag: "BOOK OF THE MONTH",
      title: "The Midnight Library",
      description:
        "Between life and death there is a library. Discover the extraordinary journey of Nora Seed as she explores the lives she could have lived.",
      author: "Matt Haig",
      image: book
    },
    {
      tag: "BOOK OF THE MONTH",
      title: "The Midnight Library",
      description:
        "Between life and death there is a library. Discover the extraordinary journey of Nora Seed as she explores the lives she could have lived.",
      author: "Matt Haig",
      image: book
    }
  ];

  return (
    <div className="py-5" style={{ background: "#f7f4ef" }}>
      <div className="container">

        <div
          id="bookCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {bookData.map((item, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className="row align-items-center">

                  *********** LEFT CONTENT **************
                  <div className="col-md-6">
                    <span
                      className="badge mb-3"
                      style={{
                        background: "#e6edff",
                        color: "#3b5cff"
                      }}
                    >
                      {item.tag}
                    </span>

                    <h1 className="fw-bold display-5 mt-3">
                      {item.title}
                    </h1>

                    <p className="text-muted mt-3">
                      {item.description}
                    </p>

                    <p className="fst-italic text-muted">
                      — {item.author}
                    </p>

                    <div className="d-flex gap-3 mt-4">
                      <button className="btn btn-primary px-4">
                        Add to Cart →
                      </button>
                      <button className="btn btn-light border px-4">
                        Preview Chapter
                      </button>
                    </div>
                  </div>

                  ********* RIGHT IMAGE *********************
                  <div className="col-md-6 text-center mt-4 mt-md-0">
                    <div
                      style={{
                        background: "#0b2c3d",
                        display: "inline-block",
                        padding: "20px",
                        borderRadius: "6px"
                      }}
                    >
                      <img
                        src={item.image}
                        alt="book"
                        className="img-fluid"
                        style={{ maxHeight: "380px" }}
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>

          **************** CONTROLS *************
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bookCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bookCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>

        </div>
      </div>
    </div>
  );
}

    
    */}