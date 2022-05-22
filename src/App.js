import './App.css';
import carreerpic from "./undrawimage.svg"
import {useState} from "react"

function App() {

  const [items, setItems]=useState(
    {
      request_no:new Date().getTime(),
      workOrderId:"SM#"+new Date().getTime(),
      orderDate: new Date(),
      jobtitle:"",
      requestedby:"",
      joblocation:"",
      dateExpectedtoCompleteErection:"",
      dateExpectedtoCompleteDismantling:"",
      dimension:{
        length:"",
        width:"",
        height:"",
        volume:function(){
          return this.length * this.width * this.height
        }
      },
      scaffoldtype:"",
      materialcount:0,
      collectionId:"thilakrajCollection"
    }
    )
    async function handleValidation(){
      const response=await fetch('https://rczversion2.herokuapp.com/api/addregistration',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(items)
      });
      const data=await response.json();
      console.log(data);
      
    }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-5 imagewidth">
            <img className="sathish" src={carreerpic} alt="imagedarw"></img>
          </div>

          <div className="col formwidth">
          <div className="row g-4 newone">
            <h1>Order Form</h1>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Job Title</label>
            <input onChange={function(e){
              setItems({...items, jobtitle:e.target.value})
            }} type="text" className="form-control" id="inputEmail4"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Requested_By</label>
            <input onChange={function(e){
              setItems({...items, requestedby:e.target.value})
            }} type="text" className="form-control" id="inputPassword4"/>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Job_Location</label>
            <input onChange={function(e){
              setItems({...items, joblocation:e.target.value})
            }} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Date Expected to Complete Erection</label>
            <input onChange={function(e){
              setItems({...items, dateExpectedtoCompleteErection:e.target.value})
            }} type="date" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Date Expected to Complete Dismantling</label>
            <input onChange={function(e){
              setItems({...items, dateExpectedtoCompleteDismantling:e.target.value})
            }} type="date" className="form-control" />
          </div>
  
          <div className="mb">
              Dimension
          </div>
          <div className="input-group mb-1 dimensionwidth">
            <span className="input-group-text" id="basic-addon1">Length</span>
            <input onChange={function(e){
              setItems({...items, dimension:{...items.dimension,length:e.target.value}})
            }} type="text" className="form-control" />
          </div>
          <div className="input-group mb-1 dimensionwidth">
            <span className="input-group-text" id="basic-addon1">Width</span>
            <input onChange={function(e){
              setItems({...items,dimension:{...items.dimension,width:e.target.value}})
            }} type="text" className="form-control" />
          </div>
          <div className="input-group mb-1 dimensionwidth">
            <span className="input-group-text" id="basic-addon1">Height</span>
            <input onChange={function(e){
              setItems({...items,dimension:{...items.dimension,height:e.target.value}})
            }} type="text" className="form-control" />
          </div>
       
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">Scaffold Type</label>
            <select onChange={function(e){
              setItems({...items,scaffoldtype:e.target.value})
            }} id="inputState" className="form-select">
              <option >...Choose...</option>
              <option>Scafold_long</option>
              <option>Scafold_Medium</option>
              <option>Scafold_Short</option>
              <option>Scafold_Join</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">Material_Count</label>
            <select onChange={function(e){
              setItems({...items,materialcount:e.target.value})
            }} id="inputState" className="form-select">
              <option >...Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
        
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button onClick={function(){
          handleValidation();
        }} className="btn btn-outline-secondary but1"  type="button">SUBIT</button>
        <button type="button" className="btn btn-outline-secondary but2">GET DATA</button>
        <button type="button" className="btn btn-outline-secondary but3">RESET</button>
        </div>
        </div>
          </div>
        </div>

    </div>
        
        
    </div>
  );
}

export default App;
