import Header from "./Header";
import logo from "../../../assets/logo.png";
import Footer from "./Footer";

export default function Publication()
{
    return(<div style={{backgroundColor: "#f5f5f5"}}>
        <div>
            <Header/>
        </div>

    <div className="container py-5">
         <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6 text-center">
                <img src={logo} style={{ maxWidth: "240px" }}/>
            </div>

                <div className="col-12 col-lg-6">
                    <div className="bg-white shadow-sm p-4 p-md-5" style={{borderRadius: 12,border: "1px solid #e0e0e0"}}>
                        <h1>Xoffencer International Book Publication House</h1>

                        <div style={{fontSize:16,fontWeight:400,color:'#956f6f'}}>
                            International Publisher
                        </div>

                        <div style={{margin:5,marginTop:20,fontSize:18,fontWeight:500,lineHeight:1.2,letterSpacing:0.5,fontFamily:'Newsreader,serlief'}}>
                           Xoffencer International is a leading publisher dedicated to bringing new
                           and established voices to a global audience, focusing on academic
                           technical and literary works
                        </div>

                        <div style={{fontSize:16,fontWeight:400,color:'#956f6f',marginTop:25}}>
                            contact@xoffencerpublication.in
                        </div>

                        <div style={{fontSize:16,fontWeight:400,color:'#956f6f'}}>
                            www.xoffencerpublication.in
                        </div>
                        
                    </div>

                    
                    

                </div>
           

         </div>

        
    </div>

<div>
    <Footer/>
</div>
    </div>)
}