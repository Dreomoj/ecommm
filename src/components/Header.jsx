import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <header className="header-top-strip">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <p>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end'>
                                <a href="tel:+234 8026885123">+234 8026885123</a>
                                </p>
                        </div>
                    </div>
                </div>
            
        </header>
    </div>
  )
}

export default Header