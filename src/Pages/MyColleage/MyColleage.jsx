import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Component/Providers/AuthProvider";

const MyColleage = () => {

    const {user} = useContext(AuthContext)
    const [collages,setCollages] = useState([])

    useEffect(()=> {
        fetch(`https://end-game-task-server-self.vercel.app/myCollage/${user?.email}`)
        .then(res => res.json())
        .then(data => setCollages(data))


    },[user?.email])


    return (
        <div className="p-12">
         
         {
            collages.map((item,index)=> <div key={index} className="card w-96 bg-[#2B2F36] text-white p-12 text-xl font-light glass">
            <figure><img src={item.photo} alt="car!"/></figure>
            <div className="card-body">
              <h2 className="">Name{item.name}</h2>
              <p>Subject : {item.subject}</p>
              <p>Number : {item.number}</p>
              <p>Number : {item.address}</p>
              <p>Email : {user?.email}</p>
             
             
              <div className="card-actions justify-end">
               
              </div>
            </div>
          </div>)
         }
     
     
     
        </div>
    );
};

export default MyColleage;