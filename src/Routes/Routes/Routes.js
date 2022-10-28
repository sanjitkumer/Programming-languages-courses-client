import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Details from "../../Pages/Details/Details";
import Errorpage from "../../Pages/Errorpage/Errorpage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TermsAndConditions from "../../Pages/Other/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://programming-languages-server-phi.vercel.app/courses')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://programming-languages-server-phi.vercel.app/category/${params.id}`)
            },

            {
                path: '/allCourses/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`https://programming-languages-server-phi.vercel.app/category/${params.id}`)
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
                path: '/courses/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://programming-languages-server-phi.vercel.app/courses/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses/:id/purchase',
                element: <PrivateRoute> <TermsAndConditions></TermsAndConditions> </PrivateRoute> ,
                loader: ({params}) => fetch(`https://programming-languages-server-phi.vercel.app/courses/${params.id}`)
            }
        ]
    }
])