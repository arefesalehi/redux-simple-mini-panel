import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import {useRoutes} from 'react-router-dom'
import mypanel from './routes'
const App = () => {
const router = useRoutes(mypanel)
  return (
    <>

    <Header/>




    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <Sidebar/>
        </div>
        <div className="col-md-9">
          {router}
        </div>
      </div>
    </div>





    </>
  )
}

export default App