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
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/cd/04/caption.jpg?w=700&h=-1&s=1&cx=1440&cy=949&chk=v1_1dc18af01397ba07dac9" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>412 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://upload.travelawaits.com/ta/uploads/2021/04/e48ace356187116a94627e864fea1e48ace-scaled.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured