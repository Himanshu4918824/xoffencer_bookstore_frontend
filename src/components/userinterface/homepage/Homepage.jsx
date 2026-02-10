import BestSellor from "./BestSellor";
import EditorScroll from "./EditorScroll";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { useState } from "react";

export default function Homepage()
{
    const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };


    return(<div>
        <div>
            <Header/>
        </div>

        <div>
            <Hero/>
        </div>

        <div style={{width:'97%',alignSelf:'center',marginTop:40}}>
            <EditorScroll/>
        </div>

 <hr className="mt-4 mb-4" />

        <div style={{marginTop:40,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1>Literary Dispatches</h1>
            <p className="text-center text-muted mb-4" style={{ maxWidth: "600px",marginTop:20 }}>
               Join 500+ readers receiving curated recommendation & execlusive essays on contemporary literature twice a month.
           </p>

        </div>

            <div onClick={handleSubmit} className="d-flex justify-content-center gap-3">
             <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" style={{ maxWidth: "450px", backgroundColor: "#f3f3f3", border: "none", padding: "14px 18px", borderRadius: "12px"}}/>

          <button type="submit" className="btn text-white px-4" style={{backgroundColor: "#111111", borderRadius: "8px",padding: "14px 26px"}}>
            Subscribe
          </button>  
        </div>
        

        <div style={{marginTop:50}}>
            <BestSellor/>
        </div>

        <div style={{marginTop:40}}>
            <Footer/>
        </div>

        
    </div>)
}