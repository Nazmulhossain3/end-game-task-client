/* eslint-disable no-unused-vars */
import google from '../../assets/Image/google.svg'
import gitHub from '../../assets/Image/github.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';


const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()



const Register = () => {
    const navigate = useNavigate()
    const {createUser,userUpdate} = useContext(AuthContext)

const handleRegister = (event)=> {
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const password = form.password.value 
    const photo = form.photo.value 
    console.log(name,email,password,photo)

    createUser(email,password)
    .then(result => {

    const loggedUser = result.user
    console.log(loggedUser)
    userUpdate(name,photo)
     

      
    console.log(loggedUser)
    
    navigate('/')
    })
    .catch(error => {
        console.log(error)
    })

   
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

<form onSubmit={handleRegister} className="bg-[#1A1B2E] p-12 rounded-md">
<h2 className="text-2xl text-white font-bold text-center">Login Please</h2>
<input name='name' className="md:w-72 rounded p-2  mt-5 border-2  transition duration-200 " type="name" placeholder="Name"  /> <br />
<input name='email'  className="md:w-72 rounded p-2  mt-3 border-2  transition duration-200 " type="email" placeholder="Email" /> <br />
<input name='password' className="md:w-72 rounded p-2  mt-5 border-2  transition duration-200 " type="password" placeholder="password"  /> <br />
<input name='photo'  className="md:w-72 rounded p-2  mt-3 border-2 transition duration-200 " type="text" placeholder="photo" /> <br />





<input type="submit" value="Register" className="md:w-72 text-white bg-green-500 rounded p-2 mt-3  border-2 opacity-60 transition duration-200 " />
<p className='text-white'><small>Already have an account ?<Link to='/login' className='text-orange-400 hover:underline'>Login</Link> </small></p>



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

export default Register;