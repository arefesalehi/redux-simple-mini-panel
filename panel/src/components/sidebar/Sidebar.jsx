import './sidebar.css'
import {BiRename} from 'react-icons/bi'
const Sidebar = () => {
  return (
    <>
  <div className="sidebar">
            <div className="background-profile">
              <img src="img/admin/banner/banner.png" alt="banner" />
              <span className='profile'>
                <img src="img/admin/profile/banana.png" alt="" />
              </span>
            </div>
            <div className="profile-name">
              <p>محمد امین سعیدی راد</p>
              <p>توسعه دهنده جاوا اسکریپت</p>
            </div>
            <div className="name">
            <div className="firstname"><BiRename/> نام کوچک </div>
            <div className="myfirstname">محمد امین</div>
            </div>

            <div className="name">
            <div className="lastname"><BiRename/> نام خانوادگی </div>
            <div className="mylastname"> سعیدی راد</div>
            </div>

            <div className="course-count">
            <div className="lastname"><BiRename/> تعداد دوره </div>
            <div className="mylastname"> 350</div>
            </div>

            <button className='change-info'>تغییر اطلاعات</button>


          </div>


    </>
  )
}

export default Sidebar