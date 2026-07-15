import './infos.css'
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaBook, FaArchway, FaKey } from 'react-icons/fa'
import { MdArticle, MdFamilyRestroom, MdMarkEmailRead } from 'react-icons/md'
const Infos = ({username}) => {
  return (
    <>
      <div className="main">
        <div className="menu">
          <ul>
            <li>
              <Link to="/users">
                <BsFillPersonFill />
                کاربران
              </Link>
            </li>
            <li>
              <Link to="/infos">
                <FaBook />
                اطلاعات
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <FaArchway />
                دوره ها
              </Link>
            </li>
            <li>
              <Link to="/articles">
                <MdArticle />
                وبلاگ
              </Link>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="information">
              <div className="info-header">اطلاعات شما</div>

              <div className="row">
                <div className="col-md-6">
                  <span className="input">
                    <BsFillPersonFill />
                    <input
                      className="info-input"
                      type="text"
                      placeholder="نام..."
                      value={username}
                    />
                  </span>
                </div>

                <div className="col-md-6">
                  <span className="input">
                    <MdFamilyRestroom />
                    <input
                      className="info-input"
                      type="text"
                      placeholder="نام خانوادگی..."
                    />
                  </span>
                </div>
                <div className="col-md-6">
                  <span className="input">
                    <FaArchway />
                    <input
                      className="info-input"
                      type="text"
                      placeholder="نام کاربری..."
                    />
                  </span>
                </div>

                <div className="col-md-6">
                  <span className="input">
                    <MdMarkEmailRead />
                    <input
                      className="info-input"
                      type="text"
                      placeholder="ایمیل..."
                    />
                  </span>
                </div>

                <div className="col-md-4">
                  <span className="input">
                    <FaKey />
                    <input
                      className="info-input"
                      type="text"
                      placeholder="رمز جاری..."
                    />
                  </span>
                </div>

                <div className="col-md-4">
                  <span className="input">
                    <FaKey />
                    <input
                      className="info-input"
                      type="text"
                      placeholder="رمز جدید..."
                    />
                  </span>
                </div>

                <div className="col-md-4">
                  <span className="input">
                    <FaKey />
                    <input
                      className="info-input"
                      type="text"
                      placeholder="تکرار رمز ..."
                    />
                  </span>
                </div>

                <div className="col-md-3">
                  <div className="info-profile">
                    <p>پروفایل</p>
                    <img src="img/admin/profile/banana.png" alt="" />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="banner">
                    <p>بنر</p>
                    <img src="img/admin/banner/banner.png" alt="" />
                  </div>
                </div>

                <div className="col-md-6">
                  <button className="info-update-button">
                    اپدیت اطلاعات جدید
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="info-team">اطلاعات تیم</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Infos
