import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import SearchBar from "./SearchBar";
import { useState } from "react";


export default function Header()
{
     const [menuOpen, setMenuOpen] = useState(false);
    const navigate=useNavigate();

    return(<div>
    <div style={{display:'flex',alignItems:'center',width:'100%',background: "#ffffff", height: 60, borderBottom: "2px solid #eee",justifyContent:'space-between' }}>
        <div onClick={()=>navigate('/')} style={{display:'flex',justifyContent:'center',alignItems:'center',margin:10,marginLeft:25,cursor:'pointer'}}>
            <img src={logo} style={{width:40,height:40}}/>
            <div style={{fontSize:"clamp(18px, 2vw, 22px)",fontWeight:'bold',marginLeft:5}}>Xoffencer Bookstore</div>
        </div>

        <div className="d-lg-block d-none">
            <ul style={{ display: "flex",listStyle: "none", gap: 30, margin: 0,padding: 0,flexGrow: 1, justifyContent: "center",fontWeight: 500, fontSize:16,cursor:'pointer',marginLeft:150}}>
                <li onClick={()=>navigate('/bookcategorydetails')}>Store</li>
                <li onClick={()=>navigate('/author')}>Author</li>
                <li onClick={()=>navigate('/public')}>Publication</li>
                <li onClick={()=>navigate('/contact')}>Contact Us</li>
                <li onClick={()=>navigate('/about')}>About me</li>
            </ul>
        </div>

            <div className='d-lg-block d-none ms-3'><SearchBar/></div> {/* d-lg-block  means it show only in large screen */}

          <div style={{ display: "flex", gap: 15 }}>
             <button onClick={()=>navigate('/wish')} className="btn d-lg-block d-none" type="button">
                <i className="bi bi-heart-fill " style={{ fontSize: 20 }}></i>
            </button>

               <button onClick={()=>navigate('/cart')} className="btn d-lg-block d-none" type="button">
                <i className="bi bi-bag-fill" style={{ fontSize: 20 }}></i>
              </button>

               <button className="btn d-lg-block d-none" type="button">
                <i className="bi bi-person-circle" style={{ fontSize: 20 }}></i>
              </button>

              <button  className="btn d-lg-none" onClick={() => setMenuOpen(!menuOpen)} type="button">
                <i className="bi bi-list" style={{ fontSize: 22, fontWeight:'bolder',marginLeft:5 }}></i>
            </button>
         
        </div>
         
    </div>


      {/****Mobile case************* */}
    <div  className="btn d-lg-none">

   
     <div style={{display:'flex', alignItems:'center',width:'100%',background: "#ffffff", height: 60, borderBottom: "2px solid #eee",justifyContent:'space-between'}}>
        <SearchBar/>  
     </div>


     <ul
          className={`list-unstyled d-lg-flex align-items-center gap-4 m-2  
          ${menuOpen ? "d-block w-100 mt-3" : "d-none d-lg-flex"}`}
          style={{ fontWeight: 500, fontSize: 16, cursor: "pointer",margin:2 }}
        >
          <li onClick={() => navigate("/bookcategorydetails")}>Store</li>
          <li onClick={() => navigate("/author")}>Author</li>
          <li onClick={() => navigate("/public")}>Publication</li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
          <li onClick={() => navigate("/about")}>About me</li>
        </ul>

        </div>

    </div>)
}