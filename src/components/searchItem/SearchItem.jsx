import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1100,w_2000/v1601914830/g5/g5-c-5fxkmaq4c-coast-real-estate/g5-cl-1kc8phin6h-acqua-apartments/uploads/CLS_6485-Edit_merrsm.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from centre</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with air conditioning</span>
            <span className="siFeatures">Entire studio . 1 bathroom . 21m 1 full bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price!</span>
        </div>
        <div className="siDetails">
            <div className="siRatings">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem