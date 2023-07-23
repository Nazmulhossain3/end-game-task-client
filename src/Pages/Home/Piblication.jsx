import pic from '../../assets/End-gama/Reserch-8.png'
import pic1 from '../../assets/End-gama/Reserch-6.png'
import pic2 from '../../assets/End-gama/Reserch-7.png'


const Piblication = () => {
   
    return (
 <div className='mt-12 px-12'>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

<div className="card  glass">
  <figure><img src={pic2} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="">Title : The Electrochemical Society</h2>
    <a className='rounded-md border-2 text-center btn-outline bg-green-500 text-white' href='https://iopscience.iop.org/article/10.1149/1945-7111/ace4fa/meta'>Link</a>
    
  </div>
</div>
<div className="card  glass">
  <figure><img src={pic1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="">Title : Medical Breakthroughs</h2>
    <a className='rounded-md border-2 text-center btn-outline bg-green-500 text-white' href='https://iopscience.iop.org/article/10.1149/1945-7111/ace2ee'>Link</a>
    
  </div>
</div>
<div className="card  glass">
  <figure><img src={pic} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="">Title : The Electrochemical Society</h2>
    <a className='rounded-md border-2 text-center btn-outline bg-green-500 text-white' href='https://iopscience.iop.org/article/10.1149/1945-7111/ace2ee'>Link</a>
    
  </div>
</div>
            
        </div>
 </div>
    );
};

export default Piblication;