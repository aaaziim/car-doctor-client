import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Checkout from '../Pages/Checkout/Checkout';
import MyBookings from '../Pages/MyBookings/MyBookings';
import PrivateRoute from './PrivateRoute';

 

    const router = createBrowserRouter([
        {
            path: "/",
            element : <Main></Main>,
            children: [
                {
                    path: "/",
                    element:<Home></Home>
                },
                {
                    path: "/login",
                    element:<Login></Login>
                },
                {
                    path: "/register",
                    element:<Register></Register>
                },
                {
                    path: "/checkout/:id",
                    element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
                },
                {
                    path: "/mybookings",
                    element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
                },
                
            ]

        }
    ])

 

export default router;