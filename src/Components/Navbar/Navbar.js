
import React, { useState } from 'react'
import styles from "./Navbar.module.css"
function Navbar({ handleSearch, handleSort }) {
  const [searchValue,setSearchValue]=useState("")

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    handleSearch(e.target.value)
  }

const handleSortChange = (e) => {
    handleSort(e.target.value)
  }
  return (
    <div className={styles.navbar}>
      <input type="search"
                name="search"
                id="search"
                value={searchValue}
                onChange={handleChange}
                placeholder="Search..." 
                  className={styles.search}
                />
      <select onChange={handleSortChange} className={styles.select}>
                <option value="">Sort by...</option>
                <option value="name">Sort by Name</option>
                <option value="id">Sort by Id</option>
            </select>
    </div>
  )
}

export default Navbar
