import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./header.css"
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection' 
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        Adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime discount? It's Genius.</h1>
            <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with free JabesBooking account</p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText" onClick={()=>{setOpenDate(!openDate)}}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange 
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{
                    `${options.Adult} Adult . ${options.children} children . ${options.room} room`
                    }</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button 
                                disabled={options.Adult <= 1}
                                className="optionCounterButton" 
                                onClick={()=> handleOption("Adult", 'd')}>-</button>
                                <span className="optionCounterNumber">{options.Adult}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("Adult", 'i')}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">children</span>
                            <div className="optionCounter">
                                <button 
                                disabled={options.children <= 0}
                                className="optionCounterButton" 
                                onClick={()=> handleOption("children", 'd')}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={()=> handleOption("children", 'i')}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">room</span>
                            <div className="optionCounter">
                                <button 
                                disabled={options.room <= 1}
                                className="optionCounterButton" 
                                onClick={()=> handleOption("room", 'd')}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={()=> handleOption("room", 'i')}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className='headerBtn'>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header