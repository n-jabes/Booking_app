import React from './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://www.lux-review.com/wp-content/uploads/2019/09/turkish-hotel.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotel</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://www.beaches.com/blog/content/images/2021/03/Beaches-Turks-Caicos-Overview.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>2133 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/257276599.jpg?k=da657907dd721f3ee0eb15317412e8b6555d4c6262375e8dfefa2456968f1d1c&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://www.cabinsforyou.com/public/img/luxury-gatlinburg-cabin-rental-hero.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList