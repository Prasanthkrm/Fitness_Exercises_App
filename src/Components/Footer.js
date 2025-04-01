import React from 'react'
import { Link } from 'react-router-dom';
import insta1 from '../assets/icons/instagram.png'
import linked1 from '../assets/icons/linkedin.png'
import github1 from '../assets/icons/github (1).png'
import bg_black from "../assets/images/sl_0210121_40570_20.jpg"

const scrollToTop = () => {
    window.scrollTo(0, 0);
};
export const Footer = () => {
  return (
    <>
     <div id="footer" className=" py-5 bg-black footer mt-5" style={{ backgroundImage: `url(${bg_black})` }}>
            <div className=" row d-flex justify-content-between my-5 ">
                <div className="col-md-4 me-1 mt-5">
                    <h2 className='text-danger fw-bolder'>Exercise Studio</h2>
                    <p className='footer-des pt-3 fw-semibold fw-bold pe-5'>Welcome to Exercise Studio, your ultimate fitness companion! Whether you're a beginner or a seasoned athlete, our app helps you track your workouts, set goals, and stay motivated.</p>
                    </div>
                    <div className="col-md-3 mt-5 ">
                        <h2 className='text-danger fw-bolder'>COMPANY</h2>
                        <ul className='list-unstyled fw-bold'>
                            <li className='mt-3'><Link className='under' onClick={scrollToTop} to="/">Home</Link></li>
                            <li className='mt-3'><Link className='under' to="#footer">About Us</Link></li>
                            <li className='mt-3 under'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mt-5">
                    <h2 className='text-danger fw-bolder'>DEVELOPED BY </h2>
                    <ul className='list-unstyled '>
                        <li className='mt-3 fw-bolder under'>Prasanth.M</li>
                        <li className='mt-3 fw-bolder under'>prasanth.krm2003@gmail.com</li>
                        <li className='mt-3 fw-bolder under'>9994934132</li>
                    </ul>
                </div>
                </div>
                <hr className='my-4 '/>
            <div className="d-flex justify-content-between">
                <p className="footer-copyright text-center mt-4 mb-3 flex-wrap me-3">© Exercise Studio.com - All Right Reserved.</p>
                <div className="footer-social-icons text-center d-block justify-content-end d-flex rounded-5 mt-4 mb-3">
                    <a className='me-3  ' href="https://www.instagram.com/mr_i_m_p_e_r_f_e_c_t__?igsh=ajFwYTlnODc3bWww"><img className='rounded-3' src={insta1} alt="" /></a>
                    <a className='me-3' href="https://linkedin.com/in/prasanth-m-29a243206"><img className='rounded-3' src={linked1} alt="" /></a>
                    <a className='me-3' href="https://github.com/Prasanthkrm   "><img className='rounded-3' src={github1} alt="" /></a>
                </div>
            </div>
            </div>
        
    </>
  )
}