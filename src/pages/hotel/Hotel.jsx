import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./hotel.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mail/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from "react"

export const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState("");
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/186708158.jpg?k=3f8dab968789aa91e46b091620e1df9775d3f1378a215fef2963349c80df2182&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78770312.jpg?k=2b3a274f8fa030e5a4ff1e2bae1f5c636611a3a620d03ea51ac95ea002a17f22&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256215654.jpg?k=4d3a36b91273767446dc6ab3ec5b1fa606af777bea4cb79d54e1edfe77f5a05b&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/186708158.jpg?k=3f8dab968789aa91e46b091620e1df9775d3f1378a215fef2963349c80df2182&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78770312.jpg?k=2b3a274f8fa030e5a4ff1e2bae1f5c636611a3a620d03ea51ac95ea002a17f22&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256215654.jpg?k=4d3a36b91273767446dc6ab3ec5b1fa606af777bea4cb79d54e1edfe77f5a05b&o=&hp=1"
    }
  ]

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) =>{
    let newSliderNumber;
    const photosSize = photos.length - 1;
    console.log("Photo size: " + photosSize);

    if(direction==="l"){
      newSliderNumber= sliderNumber === 0 ? photosSize : sliderNumber-1;
    }else{
      newSliderNumber= sliderNumber === photosSize ? 0 : sliderNumber+1;
    }

    setSliderNumber(newSliderNumber);
  }

  return (
    <div className="hotelPage">
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open && 
        <div className="sliderView">
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[sliderNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>
          <span className="counter">{sliderNumber} / {photos.length}</span>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>ELton St 125 New Yolk</span>
          </div>
          <span className="hotelDistance">Excellent Location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $114 aat this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                This property is 2 minutes walk from the beach. Located in Dubai, Success luxury apartment, 5 min away jbr beach, provides accommodation with an outdoor pool, free WiFi, a restaurant and a garden.
                Providing a balcony, some units are air conditioned and include a dining area and a seating area with a cable flat-screen TV. There is also a kitchen in some of the units equipped with a microwave, a fridge, and an oven.
                A children's playground can be found at the apartment, along with a terrace.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
              <h2><b>$945</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}