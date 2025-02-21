// eslint-disable-next-line no-unused-vars
import React from 'react'
//import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            {/* <Link to='/' className='link'>
            <h2>TastyGo</h2>
            </Link> */}
            <h2>TastyGo</h2>
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="userAuth">
            Login / SignUp
        </div>
   </section>
  )
}

export default TopBar