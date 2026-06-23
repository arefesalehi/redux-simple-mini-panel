
import Users from './pages/users/Users'
import Courses from './pages/courses/Courses';
import Articles from './pages/articles/Articles';
import Infos from './pages/infos/Infos';

let mypanel = [
    {path:'/', element:<Users/>},
    {path:'/users', element:<Users/>},
    {path:'/courses', element:<Courses/>},
    {path:'/articles', element:<Articles/>},
    {path:'/infos', element:<Infos/>},




]


export default mypanel;