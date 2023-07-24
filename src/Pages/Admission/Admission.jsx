import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
    const [names, setNames] = useState([])

useEffect(()=> {
fetch('https://end-game-task-server-self.vercel.app/admission')
.then(res => res.json())
.then(data => setNames(data))




},[])


    return (
        <div className="text-center mt-6">
           <p className="mb-4 text-3xl "> Collage Name :</p>
           {
            names.map((name,index)=> <div className="mb-4" key={index}>
              <Link to='/admissionForm'><p className="text-green-600"> {name.name}</p></Link>


            </div>)
           }
        </div>
    );
};

export default Admission;