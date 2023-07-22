import { useLoaderData } from "react-router-dom";

const CollageDetails = () => {
    const details = useLoaderData()
    const {collegeImage,collegeName, admissionProcess,researchWorks, sportsCategories} = details
  
  console.log(details)
    return (
 <div className="hero min-h-screen bg-base-200 p-8 ">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <img src={collegeImage} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">Name : {collegeName} </h1>
      <p className="mt-4 mb-3 font-light">Process :{admissionProcess}</p>
      <p className="">Research Work :</p>
        <div className="font-light">
          {
            researchWorks.map((item,index)=> <span className="" key={index}>
                <p className="mt-4">Name :{item.author}</p>
                <p>title : {item.title}</p>
               
                <span>{item.summary}</span>
                <p> date : {item.publishedYear}</p>
              

            </span>)

          }
        </div>

          <div className="font-light">
            
            {
                sportsCategories.map((item,index)=> <span key={index}>

                <span> Sports-Category : {item},</span>
                </span>)
            }
          </div>


      
    </div>
  </div>
</div>
    );
};

export default CollageDetails;