import { useLoaderData } from "react-router-dom";

const AllCollageDetails = () => {
    const details = useLoaderData() 
    console.log(details)
    const {collegeImage,collegeName,collegeRating,eventsDetails,numberOfResearch,sportFacilities} = details


    return (
        <div className="bg-[#2B2F36] text-white">
          
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row gap-5  font-serif">
    <img src={collegeImage} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl">Name : {collegeName}</h1>
      <p className="mt-4 font-serif ">
        {
            eventsDetails.map((item,index)=> <p key={index}>
                {item}
            </p>)
        }
      </p>

        <p>Rating : {collegeRating}</p>
        <p>Publications : {numberOfResearch} </p>

        <p className="flex md:flex-row gap-2 mt-4">
        Sports Facilities :
            {
                sportFacilities.map((item,index)=> <p key={index}>
                    <span> {item},</span>
                </p>)
            }
        </p>
     
    </div>
  </div>
</div> 
        </div>
    );
};

export default AllCollageDetails;