/* eslint-disable react-hooks/exhaustive-deps */
import './article.css'
import { Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaBook,FaArchway} from 'react-icons/fa'
import {MdArticle} from 'react-icons/md'
import ArticleBox from '../../components/articlebox/ArticleBox'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getArticleFromServer } from '../../redux/store/articleReducer'
const Articles = () => {
   const articles = useSelector(state=>state.articles)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getArticleFromServer())
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
{
  articles.map((article)=>{
    return (
  
      <ArticleBox  key={article._id} {...article}/>
    )
  })
}



        <div className="action-buttons">
                <button style={{background:'blue'}}>افزودن مقاله جدید</button>
             
            </div>
            

      

    </div>

    </>
  )
}

export default Articles