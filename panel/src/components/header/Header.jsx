import './header.css'
import {FaStar} from 'react-icons/fa'
import {BsFillBellFill} from 'react-icons/bs'
import {RxExit} from 'react-icons/rx'
const Header = () => {
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="header">
            <div className="header-right">
              <img src="img/admin/profile/banana.png" alt="" />
              <div>
                <p>محمد امین سعیدی راد</p>
                <p>توسعه دهنده جاوا اسکریپت</p>
              </div>
            </div>
            <div className="header-left">
              <div style={{background:'red'}}><FaStar/></div>
              <div style={{background:'gray'}}><BsFillBellFill/></div>
              <span className='notif'>5</span>
              <button>خروج از پنل <RxExit/></button>
            </div>
          </div>
        </div>
      </div>
     </div>

    </>
  )
}

export default Header