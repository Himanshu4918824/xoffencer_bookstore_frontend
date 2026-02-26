import React, { useRef, useState, useEffect } from "react";
import book from "../../../assets/book.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EditorScroll({ show })
{
  const scrollRef = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const data = [
    { category: "MODERN FICTION", title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$24.00", image: book },
    { category: "BIOGRAPHY", title: "Becoming", author: "Michelle Obama", price: "$28.50", image: book },
    { category: "CONTEMPORARY", title: "Normal People", author: "Sally Rooney", price: "$19.95", image: book },
    { category: "SCI-FI CLASSICS", title: "Dune", author: "Frank Herbert", price: "$22.00", image: book },
    { category: "MODERN FICTION", title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$24.00", image: book },
    { category: "BIOGRAPHY", title: "Becoming", author: "Michelle Obama", price: "$28.50", image: book },
    { category: "CONTEMPORARY", title: "Normal People", author: "Sally Rooney", price: "$19.95", image: book },
    { category: "SCI-FI CLASSICS", title: "Dune", author: "Frank Herbert", price: "$22.00", image: book }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } } // ✅ small improvement
    ]
  };

  const showData = () => {
    return data.map((item, i) => (
      <div key={i} style={{display: "flex", flexDirection: "column", border: "1px solid #eee", padding: "12px", borderRadius: "6px",background: "#fff",   margin: isMobile ? 0 : "0 5px"}}>
        <div style={{ textAlign: "center" }}>
          <img src={item.image} style={{ width: "75%" }} alt="book" />
        </div>

        
        <div className="text-primary fw-semibold" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: isMobile ? "10px" : "16px", marginTop: "8px"}}>
          {item.category}
        </div>

        
        <div className="fw-bold" style={{whiteSpace: "nowrap",overflow: "hidden", textOverflow: "ellipsis", fontSize: isMobile ? "11px" : "16px"}}>
          {item.title}
        </div>

    
        <div className="text-muted" style={{whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis",fontSize: isMobile ? "10px" : "14px"}}>
          {item.author}
        </div>

       
        <div className="fw-bold" style={{fontSize: isMobile ? "11px" : "16px",marginTop: "4px"}}>
          {item.price}
        </div>
      </div>
    ));
  };

  const handleNext = () => scrollRef.current.slickNext();
  const handlePrev = () => scrollRef.current.slickPrev();

  return (
    <div style={{ margin: isMobile ? 10 : 20, padding: 10, marginLeft: isMobile ? 10 : 60}}>
      {show !== "recommand" && (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>

            <small className="text-primary fw-semibold" style={{ fontSize: isMobile ? "10px" : "14px" }}>
              CURATED SELECTION
            </small>

            <h2 className="fw-bold mt-1" style={{ fontSize: isMobile ? "16px" : "22px" }}>
              Editor’s Picks
            </h2>
          </div>

          <a href="#" className="text-dark text-decoration-none fw-semibold" style={{ fontSize: isMobile ? "11px" : "16px" }}>
            View All Collection →
          </a>
        </div>
      )}

      <div style={{ position: "relative" }}>
       
        <div onClick={handlePrev} style={{ position: "absolute", zIndex: 2, top: "35%", left: "0%", cursor: "pointer" }}>
          <i className="bi bi-arrow-left-circle-fill" style={{ fontSize: 24 }}></i>
        </div>

        <Slider ref={scrollRef} {...settings}>
          {showData()}
        </Slider>

        <div onClick={handleNext} style={{ position: "absolute", zIndex: 2, top: "35%", right: "0%", cursor: "pointer" }}>
          <i className="bi bi-arrow-right-circle-fill" style={{ fontSize: 24 }}></i>
        </div>
      </div>
    </div>
  );
}