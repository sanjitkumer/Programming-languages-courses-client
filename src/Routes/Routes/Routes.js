import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Details from "../../Pages/Details/Details";
import Errorpage from "../../Pages/Errorpage/Errorpage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>                
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },

            {
                path: '/details/:id',
                element: <Details></Details>
            }
        ]
    }
])