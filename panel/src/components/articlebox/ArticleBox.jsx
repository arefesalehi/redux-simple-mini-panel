/* eslint-disable react/prop-types */
import './Articlebox.css'
import {MdFamilyRestroom} from 'react-icons/md'
import {AiFillFolder} from 'react-icons/ai'
import swal from 'sweetalert'
import { useDispatch } from 'react-redux'
import { removeArticleFromServer } from '../../redux/store/articleReducer'
const ArticleBox = (props) => {
const dispatch = useDispatch()

  const removeHandler=()=>{
    swal({
      title:'ایا از حذف اطمینان دارید؟',
      icon:'warning',
      buttons:['خیر','بله']
    }).then (res=>{
      if (res){
        dispatch(removeArticleFromServer(props._id))
        swal({
          title:'مقاله با موفقیت حذف شد',
          icons:'success',
          buttons:'تایید'
        })
      }
    })
  }





  return (
    <div>
        <div className="row">
        <div className="col-md-12">
            <div className="coursebox">
                <div className="coursebox-right">
                    <img src="img/admin/course/course.png" alt="" />
                </div>


                <div className="coursebox-left">
                    <div className="coursebox-left-top">
                        <p> {props.title} </p>
                        <p>{props.desc}</p>
                    </div>
                    <div className="coursebox-left-bottom">
                        <div className="coursebox-info">
                           <div className="coursebox-info-right">
                           <ul>
                             
                                <li><a href=""><AiFillFolder></AiFillFolder> دسته بندی :  {props.category}</a></li>
                                <li><a href=""><MdFamilyRestroom/>تعداد  بازدید :{props.views}</a></li>
                            </ul>
                           </div>
                           <div className="coursebox-info-left">
                            <button style={{background:'red'}} onClick={removeHandler} >حذف</button>
                        <button style={{background:'blue'}}>ویرایش</button>
                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
      </div>
    </div>
  )
}

export default ArticleBox
