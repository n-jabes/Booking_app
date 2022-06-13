import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailListTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text"placeholder='Your email'/>
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default MailList