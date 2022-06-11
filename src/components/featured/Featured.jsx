import "./featured.css"

import React from 'react'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://www.travelstart.com.ng/blog/wp-content/uploads/2015/05/lake_kivu-resorts.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.travelstart.com.ng/blog/wp-content/uploads/2015/05/lake_kivu-resorts.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Texas</h1>
                <h2>512 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.travelstart.com.ng/blog/wp-content/uploads/2015/05/lake_kivu-resorts.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Australia</h1>
                <h2>678 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured