/* eslint-disable react-hooks/exhaustive-deps */
import './users.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaBook, FaArchway } from 'react-icons/fa'
import { MdArticle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import UserBox from '../../components/userbox/UserBox'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFromServer } from '../../redux/store/userReducer'
const Users = () => {
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFromServer())
  }, [])

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

        <div className="add-remove-user">
          <div className="row">
            <div className="col-md-9">
              <div className="add-user-input">
                <span>
                  <input
                    type="text"
                    placeholder="نام و یا ایمیل کاربر را وارد نمایید..."
                  />
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="remove-user-input">
                {' '}
                <button>حذف</button>
              </div>
            </div>
          </div>
        </div>

        {users.map((user) => {
          return <UserBox key={user._id} {...user} />
        })}
      </div>
    </>
  )
}

export default Users
