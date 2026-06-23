/* eslint-disable react-hooks/exhaustive-deps */
import './courses.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaBook,FaArchway} from 'react-icons/fa'
import {MdArticle} from 'react-icons/md'
import { Link } from 'react-router-dom'
import CourseBox from '../../components/CourseBox/CourseBox'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCourseFromServer } from '../../redux/store/courseReducer'

const Courses = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch=useDispatch()

  useEffect(()=>{
dispatch(getCourseFromServer())
  },[])
  return (
    <>

<div className="main">
      <div className="menu">
        <ul>
        <li><Link to="/users"><BsFillPersonFill/>کاربران</Link></li>
        <li><Link to="/infos"><FaBook/>اطلاعات</Link></li>
          <li><Link to="/courses"><FaArchway/>دوره ها</Link></li>
          <li><Link to="/articles"><MdArticle/>وبلاگ</Link></li>

        </ul>
      </div>


      {courses.map((course) => (
              <CourseBox key={course._id} {...course} />
            ))}


        <div className="action-buttons">
                <button style={{background:'blue'}}>افزودن دوره جدید</button>
                <button style={{background:'red'}}>اعمال تخفیف همه دوره ها</button>
                <button style={{background:'blue'}}>افزودن دسته بندی</button>
            </div>
            

      

    </div>

    </>
  )
}

export default Courses
