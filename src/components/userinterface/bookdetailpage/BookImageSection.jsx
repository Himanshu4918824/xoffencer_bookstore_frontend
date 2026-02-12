import book from "../../../assets/book.png";

export default function BookImageSection() {
  return (
    <div style={{marginLeft:50}}>
      <div className="card shadow-sm" style={{ padding: "20px",width:'80%',height:530 }}>
        <div className="card-body text-center">
          <img src={book} alt="Book" className="img-fluid"  style={{ width: "96%", height: "60%", margin: 10,marginTop:15 }}/>
        </div>
      </div>
    </div>
  );
}
