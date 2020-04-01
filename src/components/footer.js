import React from "react"
import '../styles/global.css'
import logof from "../images/l-footer.png"
import mail from "../images/mail.svg"
import phone from "../images/phone.svg"
import fb from "../images/fb.svg"
import yt from "../images/yt.svg"
import linkedin from "../images/linkedin.svg"
import insta from "../images/insta.svg"
import evomo from "../images/cp-fo.svg"
import evomob from "../images/cp-fo-mo.svg"

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
          {/* Col 0 */}
          <div className="col no-flex">
            <ul className="list-unstyled">
              <li><img className="lo-fo content-desktop" src={evomo} width="auto" height="auto" alt="Evomo Copyright"/></li>
              <li><img className="lo-fo content-mobile" src={evomob} width="auto" height="auto" alt="Evomo Copyright"/></li>
            </ul>
          </div>
          
          {/* Col 1 */}
          <div className="col no-flex" >
            <ul className="list-unstyled">
              <a href="/"><li className="li-fo">Beranda</li> </a>
              <a href="/"><li className="li-fo">Cara Kerja</li></a>
              <a href="/"><li className="li-fo">Fitur</li></a>
              <a href="/"><li className="li-fo">Hubungi Kami</li></a>
            </ul>
          </div>
          {/* Col 2 */}
          <div className="col no-flex">
            <ul className="list-unstyled">
              <li className="li-fo"><b>Berhubungan dengan kami</b></li>
              <li><img className="lo-fo" src={logof} width="86" height="36" alt="Jeager"/></li>
              <li className="li-fo">Jl. Sisingamangaraja No.4, Selong,<br/> Kec. Kby. Baru, Kota Jakarta Selatan,<br/> DKI Jakarta 12110</li>
              <li className="li-fo"><img src={mail} width="20" height="23" alt="Mail"/> hello@Jeager.io</li>
              <li className="li-fo"><img src={phone} width="20" height="23" alt="Mail"/> +6282211776239</li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="col no-flex"> 
            <ul className="list-unstyled">
              <li className="li-fo"><b>Ikuti kami di sini</b></li>
              <a href="https://www.linkedin.com/company/evomo-id/" target="blank"><li className="li-fo"><img src={linkedin} width="20" height="23" alt="LinkedIn"/> Evomo_id</li></a>
              <a href="https://www.youtube.com/channel/UCOHfXUOEO6EEBQYqMpbfwTA" target="blank"><li className="li-fo"><img src={yt} width="20" height="23" alt="Youtube"/> Evomo</li></a>
              <a href="https://www.instagram.com/evomo_id/" target="blank"><li className="li-fo"><img src={insta} width="20" height="23" alt="Instagram"/> @evomo_id</li></a>
              <a href="https://m.facebook.com/profile.php?id=104526554498630&ref=content_filter" target="blank"><li className="li-fo"><img src={fb} width="20" height="23" alt="Mail"/> Evomo</li></a>
            </ul>
          </div>
          </div>        
         <br />
      </div>
    </div>
  )
}

export default Footer