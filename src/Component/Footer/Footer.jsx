import pic from '../../assets/Image/logo_dark.webp'
const Footer = () => {
    return (
        <div className='  p-12'>
           <footer className="footer p-10 bg-[#2B2F36] text-white">
  <div>
   <img src={pic} alt="" />
   <p className='mt-4'>Copyright © 2023 - All right reserved</p>
  </div> 
  
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">Address : Tejgaon-Dhaka </a> 
    <a className="link link-hover"> Phone : +8801316037657 </a> 
    <a className="link link-hover"> Email : educationcenter.com </a> 
    
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>

        </div>
    );
};

export default Footer;