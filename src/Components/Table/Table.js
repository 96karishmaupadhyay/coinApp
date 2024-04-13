import React, { useEffect, useState } from 'react'
import styles from "./Table.module.css"
import Navbar from '../Navbar/Navbar'
function Table({data}) {
    const [currentPage,setCurrentPage]=useState(1)
    const [sortedData, setSortedData] = useState([...data])
    const [query, setquery] = useState('')
    const itemsPerPage=8
    const startIndex=itemsPerPage*(currentPage-1)
    const lastIndex=currentPage*itemsPerPage
    const displayItems=sortedData.slice(startIndex,lastIndex)
    const totalPages=Math.ceil(sortedData.length/itemsPerPage)
    //console.log(startIndex,lastIndex)
   
    const handlePage=(page)=>{
        setCurrentPage(page)
    }
    const handleSort = (i) => {
        const sorted = [...data].sort((a, b) => {
            if (a[i] < b[i]) return -1
            if (a[i] > b[i]) return 1
            return 0
        })
        setSortedData(sorted)
        setCurrentPage(1)
    }
    const handleSearch = (searchValue) => {
        setquery(searchValue)
    }
    useEffect(() => {
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
            
        );
        setSortedData(filteredData);
        setCurrentPage(1)
    }, [query, data])
    const pagination=()=>{
        let buttons=[]
        for(let i=1;i<=totalPages;i++){
           
           buttons.push(<button onClick={()=>handlePage(i) } key={i} 
           className={currentPage === i ? styles.activePage : ''} value={i}>{i}</button>
        )}
        return buttons
    }
   
    useEffect(()=>{
        setCurrentPage(1)
    },[])
  return (
    <>
    <Navbar handleSearch={handleSearch} handleSort={handleSort}/>
    <table>
      <thead>
        <tr className={styles.row}>
          <th className={styles.inputCell}><input type="checkbox" name="" id="" />Id</th>
          
          <th>Name</th>
          <th>Rank</th>
          <th>Price (USD)</th>
          <th>Percent Change (24h)</th>
          <th>Price (BTC)</th>
          <th>Market Cap (USD)</th>
        </tr>
      </thead>
      <tbody>
     {displayItems.map((item,index)=>
        <tr className={styles.row} key={index}>
            <td className={styles.inputCell}><input type="checkbox" name="" id="" />
            <span>{item.rank}</span></td>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.price_usd}</td>
            <td>{item.percent_change_24h}</td>
            <td>{item.price_btc}</td>
            <td>{item.market_cap_usd}</td>
        </tr>
     )} 
     </tbody>
     </table>
     <div className={styles.buttonContainer}>
     {pagination()}
     </div>
     
    </>
  )
}

export default Table
