export default function BookLeftDetails()
{
    var book=['Engineering Entrance','Mediicial Entrance','Literature & Fiction','History','Science'];

    const fetchbook=()=>{
        return book.map((item,i)=>{
            return(<div>
                {item}
            </div>)
        })
    }


    return(<div style={{margin:10,padding:10}}>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">

                 <div style={{textAlign:'center',margin:8,fontSize:18,fontWeight:'bold'}}>Filters</div>

                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    CATEGORIES 
                   </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                     {fetchbook()}
                    </div>
                </div>

            </div>
        </div>


        <div style={{marginTop:10}}>
            <label for="range3" className="form-label m-2 fw-bold">PRICE</label>
            <input  style={{ accentColor: "blue" }} type="range" class="form-range" min="0" max="5" step="0.5" id="range3"></input>
        </div>


    <div>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">

              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    PUBLISHER
                </button>
               </h2>

              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="sp"/>
                      <label class="form-check-label" for="sp">Starlight Press</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="qb"/>
                      <label class="form-check-label" for="qb">Quantum Book</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="hp"/>
                      <label class="form-check-label" for="hp">Heritage Publishing</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="cq"/>
                      <label class="form-check-label" for="cq">Crison Quill</label>
                    </div>

                </div>
              </div>
              
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    BINDING TYPE
                </button>
               </h2>

                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="pb"/>
                      <label class="form-check-label" for="pb">Paperback</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="hc"/>
                      <label class="form-check-label" for="hc">Hardcover</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="sb"/>
                      <label class="form-check-label" for="sb">Spiral Binding</label>
                    </div>

                  </div>
                </div> 
            </div>


             <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    PAPER SIZE & QUALITY
                </button>
               </h2>

              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <div>Paper Size</div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="A4"/>
                      <label class="form-check-label" for="A4">A4</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="A5"/>
                      <label class="form-check-label" for="A5">A5</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="B5"/>
                      <label class="form-check-label" for="B5">B5</label>
                    </div>

                    <div>Paper Quality</div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="GSM1"/>
                      <label class="form-check-label" for="GSM1">70GSM</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="GSM2"/>
                      <label class="form-check-label" for="GSM2">80GSM Matte</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="GSM3"/>
                      <label class="form-check-label" for="GSM3">120GSM Glossy</label>
                    </div>

                  </div>
                </div>  
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    CUSTOMER RATING
                </button>
               </h2>

              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="5star"/>
                      <label class="form-check-label" for="5star">⭐⭐⭐⭐⭐</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="4star"/>
                      <label class="form-check-label" for="4star">⭐⭐⭐⭐</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="3star"/>
                       <label class="form-check-label" for="3star">⭐⭐⭐</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="2star"/>
                      <label class="form-check-label" for="2star">⭐⭐</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="1star"/>
                      <label class="form-check-label" for="1star">⭐</label>
                    </div>

                  </div>
                </div> 
            </div>
            
        </div>    
    </div>



</div>)
}