/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import google from '../../assets/Image/google.svg'
import gitHub from '../../assets/Image/github.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()




const Login = () => {
    const { signIn, user } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'




    const handleLogin = (event)=> {
    event.preventDefault()
    const form = event.target 
    const email = form.email.value 
    const password = form.password.value
    console.log(email,password)

    signIn(email, password)
    .then((result) => {
      const signInUser = result.user;
      console.log(signInUser);
      navigate(from,{replace : true})
     
    })
    .catch((error) => {
   
    });


}

const handleGoogleLogin = () => {
    signInWithPopup(auth,provider)
    
    .then(result => {
      const user = result.user
      console.log(user)
      navigate('/')
  })
  .catch(error=> {
     
  })



}

const handleGitHubLogin = ()=> {

    signInWithPopup(auth,gitHubProvider)
    .then(result => {
        const loggedInUser = result.user
        console.log(loggedInUser)
       navigate('/')
    })
    .catch(error => {
        console.log(error)
    })
        
}



    return (
       <div className=''>
         <div className="p-12 w-[500px] flex mx-auto">

<form onSubmit={handleLogin} className="bg-[#1A1B2E] p-12 rounded-md">
<h2 className="text-2xl text-white font-bold text-center">Login Please</h2>
<input name='email' className="md:w-72 rounded p-2  border-2  transition duration-200 " type="email" placeholder="Email"  /> <br />
<input name='password'  className="md:w-72 rounded p-2  mt-3 border-2  transition duration-200 " type="password" placeholder="Password" /> <br />
<input type="submit" value="Login" className="md:w-72 text-white bg-green-500 rounded p-2 mt-3  border-2 opacity-60 transition duration-200 " />
<p className='text-white'><small>Don't have any account ?<Link to='/register' className='text-orange-400 hover:underline'>Register</Link> </small></p>



<div className="divider text-white mt-6">Or sign up with</div>


<div className='flex gap-5 justify-center mt-6 opacity-80'>

<div onClick={handleGoogleLogin} className='border cursor-pointer bg-[#212235] hover:border-2 flex items-center gap-2 px-7 py-2 text-white'>
<img className='' src={google} alt="" />
<span>Google</span>
</div>
<div onClick={handleGitHubLogin}  className='border cursor-pointer bg-[#212235] hover:border-2  flex items-center gap-2 px-7 text-white'>
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