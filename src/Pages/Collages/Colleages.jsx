import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Colleages = () => {

    const [collages, setCollages] = useState([])

    useEffect(()=> {
        fetch('https://end-game-task-server-self.vercel.app/allCollage')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCollages(data)
        })


    },[])



    return (
        <div className="bg-[#2B2F36] text-white">
            <h2 className="text-3xl text-center font-light p-6"> Available collages for Admission</h2>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 p-12 gap-6 font-light">
     {
        collages.map(collage => <div key={collage._id} className="card  glass">
        <figure><img src={collage.collegeImage} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="">Name : {collage.collegeName}</h2>
          <p>Rating :{collage.collegeRating}</p>
          <p>Last Date :{collage.admissionDate}</p>
          <p>Research Number :{collage.numberOfResearch}</p>
          <div className="">
          <Link to={`/allCollage/${collage._id}`}> <button className="btn bg-purple-500 text-white btn-outline border-2 flex w-full mx-auto text-center">Details</button></Link>
          </div>
        </div>
      </div>)
       }
     </div>
       
       
       
        </div>
    );
};

export default Colleages;