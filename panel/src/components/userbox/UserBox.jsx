/* eslint-disable react/prop-types */
import './UserBox.css'
import swal from 'sweetalert'
import {useDispatch} from 'react-redux'
import { removeUserFromServer } from '../../redux/store/userReducer'
const UserBox = ({firstname, email,lastname , _id}) => {
 const dispatch = useDispatch()

  const removeHandler=()=>{
    swal({
      title:'ایا از حذف اطمینان دارید؟',
      icon:'warning',
      buttons:['خیر','بله']
    }).then (res=>{
      if (res){
        dispatch(removeUserFromServer(_id))
        swal({
          title:'کاربر با موفقیت حذف شد',
          icons:'success',
          buttons:'تایید'
        })
      }
    })
  }


  return (
    <>

<div className="col-md-12">
          <div className="users">
            <div className="header-right">
              <img src="img/admin/profile/banana.png" alt="" />
              <div>
                <p> {firstname} {lastname}</p>
                <p>{email}</p>
              </div>
            </div>
            <div className="header-left ">
              <button style={{background:'gray', marginLeft:'10px' }}>پیام ها</button>
              <button style={{background:'blue', marginLeft:'10px'}}>اطلاعات</button>
        
              <button style={{background:'red'}} onClick={removeHandler}>حذف </button>
            </div>
          </div>
        </div>
   
      
    </>
  )
}

export default UserBox
