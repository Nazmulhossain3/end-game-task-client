import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Collage = () => {
const [colleges, setCollages] = useState([])


useEffect(()=> {

fetch('http://localhost:5000/collage')
.then(res => res.json())
.then(data => {
    console.log(data)
    setCollages(data)
})


},[])

    return (
        <div className=" font-light grid md:grid-cols-2 lg:grid-cols-3 p-12 gap-6">
           {

            colleges.map(collage => <div key={collage._id} className="card glass">
            <figure><img src={collage.collegeImage} alt="car!"/></figure>
            <div className="card-body">
              <h2 className="">Name :{collage.collegeName}</h2>
              <p>Date : {collage.admissionDates.start}-{collage.admissionDates.end}</p>
              <p>
              Events:
                {
                    collage.events.map((event,index) => <span className=''  key={index}>
                       ,
                    <span>
                      {event}
                    </span>

                    </span>)
                }

              </p>

              <p>Research History : {collage.researchHistory}</p>


              <p>
              Sports:
                {
                    collage.sports.map((event,index) => <span className=''  key={index}>
                       ,
                    <span>
                      {event}
                    </span>

                    </span>)
                }

              </p>
              
              
              <div className="">
               <Link to={`/collage/${collage._id}`}> <button className="btn btn-outline border-2 flex w-full mx-auto text-center">Details</button></Link>
              </div>
            </div>
          </div>)

           }
        </div>
    );
};

export default Collage;