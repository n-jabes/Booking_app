import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { useState } from 'react'

export const List = () => {
  const location = useLocation();
  const [date, setDate] = useState(location.state.date)
  const [destination, setDestination] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
                <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            </div>
          </div>
          <div className="listResult">

          </div>
        </div>
      </div>
    </div>
  )
}
