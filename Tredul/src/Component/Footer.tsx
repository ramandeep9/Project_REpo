import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import tredul from '../logos/tredul.jpeg'
import itr from '../logos/itr.jpeg'
import vi from '../logos/vi.jpeg'
import skrase from '../logos/sk.jpeg'
import holis from '../logos/holis.png'
import puja from '../logos/puja.jpeg'
import swadeshi from '../logos/swadeshi.jpeg'
import job from '../logos/job.jpeg'
import sarvatr from '../logos/sarvatr.jpeg'
import tudu from '../logos/tudu.jpeg'
import dhe from '../logos/dhe.jpeg'
import vb from '../logos/vb.jpeg'


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="map"><iframe className="mapp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.41634419248265!2d76.70846544206141!3d30.699798573459468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1710140719324!5m2!1sen!2sin" width="300" height="250" ></iframe></div>
        
        <div className="contacter">
          <h2 className='footerHead'>CONTACT US</h2>
          <form id='Footerform'>
            <input className="ino" type="text" placeholder="Name"/>
            <input className="ino" type="text" placeholder="Enter Email"/>
            <input className="ino" type="text" placeholder="Mobile Number"/>
            <input className="ino" type="text" placeholder="Query"/>
            <button className="buttnF">Submit</button>

            </form>
          </div>

        <div className="third">


      <div className="linksuse">  
        <h2 className="small">USEFUL LINKS</h2>

        <div className="gridlog"> 
        
        <a href="https://www.tredul.in/" target="_blank"><img className="logim" src={tredul} / ></a>
        <a href="https://www.vi.rase.co.in/" target="_blank"><img className="logim" src={vi} / ></a> 
        <a href="https://www.vidyabharti.net/" target="_blank"><img className="logim" src={vb} / ></a>
        <a href="https://vi.rase.co.in/" target="_blank"><img className="logim" src={skrase} / ></a>
        <a href="https://www.tudu.co.in/" target="_blank"><img className="logim" src={tudu} / ></a>
        <a href="https://www.swadeshibazaar.netlify.app/" target="_blank"><img className="logim" src={swadeshi} / ></a>
        <a href="https://www.itrchandigarh.org/" target="_blank"><img className="logim" src={itr} / ></a>
        <a href="https://www.jobs360degree.in/" target="_blank"><img className="logim" src={job} / ></a>
        <a href="https://www.alltemples.org.in/" target="_blank"><img className="logim" src={holis} / ></a>
        <a href="https://www.dhe.org.in/" target="_blank"><img className="logim" src={dhe} / ></a>
        <a href="https://www.poojawala.in/" target="_blank"><img className="logim" src={puja} / ></a>
        <a href="https://www.sarvatr.co.in/" target="_blank"><img className="logim" src={sarvatr} / ></a>

        
        </div>

       </div>

<br/>
        <div className="social-icons">
        <h2 className="small">FOLLOW US</h2>
          <hr></hr>

          <ul className="twiter">
            <li className=" logger facebook"></li>
            <li className=" logger twitter"></li>
            <li className=" logger linkedin"></li>
            <li className=" logger insta"></li>
            <li className=" logger youtube"></li>
          </ul>
        </div>

</div>

        
      
      
        </footer>
       
    </div>
  )
}

export default Footer

