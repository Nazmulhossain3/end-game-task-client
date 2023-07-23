/* eslint-disable react/no-unescaped-entities */
import google from '../../assets/Image/google.svg'
import gitHub from '../../assets/Image/github.svg'
import { Link } from 'react-router-dom';
const Login = () => {

    const handleLogin = (event)=> {
    event.preventDefault()
    const form = event.target 
    const email = form.email.value 
    const password = form.password.value
    console.log(email,password)
}




    return (
       <div className=''>
         <div className="p-12 w-[500px] flex mx-auto">

<form onSubmit={handleLogin} className="bg-[#1A1B2E] p-12 rounded-md">
<h2 className="text-2xl text-white font-bold text-center">Login Please</h2>
<input name='email' className="md:w-72 rounded p-2 hover:bg-[#2F3146] mt-5 bg-[#1A1B2E] border-2 opacity-60 transition duration-200 " type="email" placeholder="Email"  /> <br />
<input name='password'  className="md:w-72 rounded p-2 hover:bg-[#2F3146] mt-3 bg-[#1A1B2E] border-2 opacity-60 transition duration-200 " type="password" placeholder="Password" /> <br />
<input type="submit" value="Login" className="md:w-72 text-white bg-green-500 rounded p-2 mt-3  border-2 opacity-60 transition duration-200 " />
<p className='text-white'><small>Don't have any account ?<Link to='/register' className='text-orange-400 hover:underline'>Register</Link> </small></p>



<div className="divider text-white mt-6">Or sign up with</div>


<div className='flex gap-5 justify-center mt-6 opacity-80'>

<div className='border bg-[#212235] hover:border-2 flex items-center gap-2 px-7 py-2 text-white'>
<img className='' src={google} alt="" />
<span>Google</span>
</div>
<div className='border bg-[#212235] hover:border-2  flex items-center gap-2 px-7 text-white'>
<img src={gitHub} alt="" />
<span>GitHub</span>
</div>




</div>


</form>

</div>
       </div>
    );
};

export default Login;