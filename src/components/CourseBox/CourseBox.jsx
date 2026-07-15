/* eslint-disable react/prop-types */
import './CourseBox.css'
import { MdPriceChange, MdFamilyRestroom } from 'react-icons/md'
import { AiFillFolder } from 'react-icons/ai'
import swal from 'sweetalert'
import { removeCourseFromServer } from '../../redux/store/courseReducer'
import { useDispatch } from 'react-redux'
const CourseBox = (props) => {
  const dispatch = useDispatch()

  const removeHandler = () => {
    swal({
      title: 'ایا از حذف اطمینان دارید؟',
      icon: 'warning',
      buttons: ['خیر', 'بله'],
    }).then((res) => {
      if (res) {
        dispatch(removeCourseFromServer(props.id))
        swal({
          title: 'دوره با موفقیت حذف شد',
          icons: 'success',
          buttons: 'تایید',
        })
      }
    })
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="coursebox">
            <div className="coursebox-right">
              <img src="img/admin/course/course.png" alt="" />
            </div>

            <div className="coursebox-left">
              <div className="coursebox-left-top">
                <p>{props.title}</p>
                <p>{props.desc}</p>
              </div>
              <div className="coursebox-left-bottom">
                <div className="coursebox-info">
                  <div className="coursebox-info-right">
                    <ul>
                      <li>
                        <a href="">
                          <MdPriceChange /> قیمت:
                          {props.price === 0
                            ? 'رایگان'
                            : props.price.toLocaleString()}
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <AiFillFolder></AiFillFolder> دسته بندی :{' '}
                          {props.category}
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <MdFamilyRestroom />
                          تعداد ثبت نامی :{props.registersCount}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="coursebox-info-left">
                    <button
                      style={{ background: 'red' }}
                      onClick={removeHandler}
                    >
                      حذف
                    </button>
                    <button style={{ background: 'blue' }}>ویرایش</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseBox
