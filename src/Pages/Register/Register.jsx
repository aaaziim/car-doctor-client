import React, { useContext } from 'react';
import img1 from "../../assets/images/login/login.svg"
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(res=> {
            const user = res.user;
            console.log(user)
        })
        .catch(error => console.log(error))
        
    }
    return (
       <div className="hero bg-base-200 min-h-screen my-4 rounded-xl">
         <div className="hero-content flex-col-reverse lg:flex-row-reverse">
           
         <div className="w-1/2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
             <div className="card-body">
              <form onSubmit={handleRegister} >
              <fieldset className="fieldset">

              <label className="fieldset-label">Name</label>
              <input type="text" name='name' className="input" placeholder="name" />




                 <label className="fieldset-label">Email</label>
                 <input type="email" name='email' className="input" placeholder="Email" />
                 <label className="fieldset-label">Password</label>
                 <input type="password" className="input" name="password" placeholder="Password" />
                 
                <input type="submit" className='btn' value="Register" />
               </fieldset>
              </form>
             </div>
           </div>
           <div className="w-1/2 text-center lg:text-left">
             <h1 className="text-5xl font-bold">Register now!</h1>
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

export default Register;