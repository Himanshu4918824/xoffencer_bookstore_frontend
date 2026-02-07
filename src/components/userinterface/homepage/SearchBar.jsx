export default function SearchBar()
{
    return(<div style={{width:300,height:40,border:'4px solid #eee',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:20}}>

        <input type="text" placeholder="Search Here....." style={{width:'90%',borderWidth:'none',outline:0}}/>
        
    </div>)
}