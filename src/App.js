import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Table from './Components/Table/Table';

function App() {
  const [data,setData]=useState([])
  const fetchData=async()=>{
    const url="https://api.coinlore.net/api/tickers/"
    try {
      const res=await axios.get(url)
      const result=  res.data.data
      setData(result)
    
    } catch (error) {
      console.log("err",error)
    }
  }
  console.log(data)
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="App">
    <h1>COIN LORE</h1>
      
    <Table data={data}/>
     </div>
  );
}

export default App;
