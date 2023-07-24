
const AdmissionForm = () => {

const handleFormSubmit = (event)=> {
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const subject = form.subject.value 
    const phoneNumber = form.number.value 
    const number = parseInt(phoneNumber)
    const address = form.address.value 
    const date_of_birth = form.date_of_birth.value 
    const photo = form.photo.value 

    const candidate = {
        name,
        email,
        subject,
        number,
        address,
        date_of_birth,
        photo
    }

    console.log(candidate)

    fetch('https://end-game-task-server-self.vercel.app/myCollage',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json',
        },
        body : JSON.stringify(candidate)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })




}



    return (
        <div className="p-12 flex justify-center">
             <div className="  ">

<form onSubmit={handleFormSubmit}  className="bg-[#1A1B2E] p-12 rounded-md">
<h2 className="text-2xl text-white font-bold text-center">Admission Form</h2>


<div className="flex md:flex-row gap-6">
<input name='name' className="md:w-72 rounded p-2  mt-5 border-2  transition duration-200 " type="text" placeholder="Name"  /> <br />
<input name='email'  className="md:w-72 rounded p-2  mt-5 border-2  transition duration-200 " type="email" placeholder="Email" /> <br />
</div>
<div className="flex md:flex-row gap-6">
<input name='subject' className="md:w-72 rounded p-2  mt-5 border-2  transition duration-200 " type="text" placeholder="subject"  /> <br />
<input name='number'  className="md:w-72 rounded p-2  mt-5 border-2  transition duration-200 " type="text" placeholder="Number" /> <br />
</div>
<div className="flex md:flex-row gap-6">
<input name='address' className="md:w-72 rounded p-2  mt-5 border-2  transition duration-200 " type="text" placeholder="address"  /> <br />
<input name='date_of_birth'  className="md:w-72 rounded p-2  mt-5 border-2  transition duration-200 " type="date" placeholder="Date Of Birth" /> <br />
</div>



<div  className="flex md:flex-row gap-6">

<input name='photo'  className="w-full rounded p-2  mt-5 border-2 transition duration-200 " type="text" placeholder="photo" /> <br />
</div>





<input type="submit" value="Register" className=" text-white bg-green-500 rounded p-2 mt-3  border-2 opacity-60 transition duration-200 " />










</form>

</div>
        </div>
    );
};

export default AdmissionForm;