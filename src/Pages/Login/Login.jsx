import React, { useContext } from 'react';

import img1 from "../../assets/images/login/login.svg"
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();



    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(res=> {
            const loggedInUser = res.user;
            //  navigate(location?.state ? location?.state : "/")

            const user = {email}
            axios.post('http://localhost:5000/jwt', user)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))

        })
        .catch(error => console.log(error))

    }
    return (
        <div className="hero bg-base-200 min-h-screen my-4 rounded-xl">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
    
  <div className="w-1/2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleLogin} >
       <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
         <input type="submit" className='btn' value="Login" />
        </fieldset>
       </form>
      </div>
    </div>
    <div className="w-1/2 text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <img src={img1} alt="" />
    </div>
  </div>
</div>
    );
};

export default Login;