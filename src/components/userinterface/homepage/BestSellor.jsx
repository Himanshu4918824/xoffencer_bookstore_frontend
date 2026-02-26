import book from "../../../assets/book.png";

export default function BestSellor() {
  const data = [
    { sno: 1, title: "The Alchemist", author: "Paulo Coetho", rating: "★★★★★", image: book },
    { sno: 2, title: "The Alchemist", author: "Paulo Coetho", rating: "★★★★★", image: book },
    { sno: 3, title: "The Alchemist", author: "Paulo Coetho", rating: "★★★★★", image: book },
    { sno: 4, title: "The Alchemist", author: "Paulo Coetho", rating: "★★★★★", image: book },
  ];

  const showData = () => {
    return data.map((item, i) => (
      <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="d-flex align-items-center p-2">
          
         
          <img src={item.image} className="img-fluid" style={{ width: "70px", cursor: "pointer" }}/>

         
          <div className="ms-3">
            <div className="fw-bold text-secondary small">
              {item.sno}
            </div>

            <div className="fw-bold">
              {item.title}
            </div>

            <div className="text-secondary small">
              {item.author}
            </div>

            <div className="text-primary fw-bold">
              {item.rating}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ background: "#fffcfc" }}>
      
      <div className="d-flex justify-content-between align-items-center mb-3 p-2">
        <div className="ms-3">
          <small className="text-primary fw-semibold">
            TRENDING NOW
          </small>
          <h2 className="fw-bold mt-1">Best Sellers</h2>
        </div>
      </div>

      
      <div className="container-fluid px-3 px-md-5">
        <div className="row g-3">
          {showData()}
        </div>
      </div>
    </div>
  );
}