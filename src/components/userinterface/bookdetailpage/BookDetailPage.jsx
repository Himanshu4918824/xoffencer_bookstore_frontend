import EditorScroll from "../homepage/EditorScroll";
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import BookDetailDescription from "./BookDetailDescription";
import BookImageSection from "./BookImageSection";

export default function BookDetailPage()
{
    return(<div style={{backgroundColor: "#f5f5f5"}}>
        <div>
            <Header/>
        </div>

        <div className="row m-3 mt-5" style={{marginLeft:20}}>
            <div className="col-lg-6">
                <BookImageSection/>
            </div>

            <div className="col-lg-6">
                <BookDetailDescription/>
            </div>
        </div>

         <div style={{marginTop:40}}>
            <div style={{fontSize:28,fontWeight:550,padding:20,marginLeft:60,fontFamily:'Helvetica'}}>Recommened For You</div>
            <div>
                <EditorScroll show='recommand'/>
            </div>
        </div>

        <div>
            <Footer/>
        </div>

        
    </div>)
}