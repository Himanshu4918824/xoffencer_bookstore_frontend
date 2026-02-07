import logo from "../../../assets/logo.png";
import SearchBar from "./SearchBar";

export default function Header()
{
    return(<div style={{display:'flex',alignItems:'center',width:'100%',background: "#ffffff", height: 60, borderBottom: "2px solid #eee",flexWrap:'wrap' }}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:10,marginLeft:25}}>
            <img src={logo} style={{width:40,height:40}}/>
            <div style={{fontSize:22,fontWeight:'bold',marginLeft:5}}>Xoffencer Bookstore</div>
        </div>

        
            <ul style={{ display: "flex",listStyle: "none", gap: 30, margin: 0,padding: 0,flexGrow: 1, justifyContent: "center",fontWeight: 500, fontSize:16}}>
                <li>Store</li>
                <li>Author</li>
                <li>Publication</li>
                <li>Contact Us</li>
                <li>About me</li>
            </ul>

            <SearchBar/>
        

          <div style={{ display: "flex", gap: 15 }}>
             <button className="btn d-lg-block d-none" type="button">
                <i className="bi bi-heart-fill" style={{ fontSize: 20 }}></i>
            </button>

               <button className="btn d-lg-block d-none" type="button">
                <i className="bi bi-bag-fill" style={{ fontSize: 20 }}></i>
              </button>

               <button className="btn d-lg-block d-none" type="button">
                <i className="bi bi-person-circle" style={{ fontSize: 20 }}></i>
              </button>
         
        </div>
    </div>)
}