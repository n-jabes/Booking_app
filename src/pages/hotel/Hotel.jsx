import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./hotel.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

export const Hotel = () => {
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
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>ELton St 125 New Yolk</span>
          </div>
          <span className="hotelDistance">Excellent Location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $114 aat this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails"></div>
        </div>
      </div>
    </div>
  )
}