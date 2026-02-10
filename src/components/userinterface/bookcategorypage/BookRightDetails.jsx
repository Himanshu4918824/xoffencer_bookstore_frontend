import book  from "../../../assets/book.png";

export default function BookRightDetails()
{
    const data=[{bookname:'The Midnight Library',author:'Matt Haig',image:book},
              {bookname:'The Midnight Library',author:'Matt Haig',image:book},
              {bookname:'The Midnight Library',author:'Matt Haig',image:book},
              {bookname:'The Midnight Library',author:'Matt Haig',image:book},
    ]

    const showData=()=>{
        return data.map((item,i)=>{
            return(
            <div style={{border:'2px solid #e0e0e0',width:'25%',height:'auto',borderRadius:20,margin: 10,}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:20}}>
                    <img style={{width:'70%'}} src={item.image}/>
                </div>

                <div style={{fontWeight:500,fontSize:16,letterSpacing:0.7,paddingLeft:10}}>{item.bookname}</div>
                <div style={{fontWeight:500,fontSize:16,letterSpacing:0.7,paddingLeft:10,margin:5}} className="text-muted">-{item.author}</div>
                

            </div>)
        })

    }


    return(<div style={{ margin: 40, display: "flex", flexWrap: "wrap" }}>
      {showData()}
    </div>)
}