import { ImFacebook, ImWhatsapp, ImYoutube } from "react-icons/im";
import { BsInstagram} from "react-icons/bs";





function Footer() {
    return(
        <>
        <div className=" w-100 footers" >
            <div className="left-footer col-xl-6">
                <p className="footer-name">ITBURNU</p>
                <a href="tel:+994556616793" className="footer-num">+994556616793</a>
                <div className="icon-div">
                    <a href="https://api.whatsapp.com/send?phone=+994556616793"><ImWhatsapp className="whatsapp"/></a>
                    <a href="https://www.facebook.com/asif.rehimov.9847"><ImFacebook className="face"/></a>
                    <a href="https://www.youtube.com"><ImYoutube className="youtube"/></a>
                    <a href="https://www.intagram.com"><BsInstagram className="instagram"/></a>
                </div>
            </div>
            <div className="right-footer col-xl-6">
                <p className="right-name">Məlumat</p>
                <ul className="ul-footer">
                    <li className="li-footer text-light"><a href="https://www.intagram.com" className="ul-li-a">Dərmanlar, Bezlər, Uşaq qidaları</a></li>
                    <li className="li-footer text-light"><a href="https://www.intagram.com" className="ul-li-a">Bizim əməkdaş həkimlərimiz</a></li>
                    <li className="li-footer text-light"><a href="https://www.intagram.com" className="ul-li-a">Filiallar və bizimlə tərəfdaşlıq</a></li>
                    <li className="li-footer text-light"><a href="https://www.intagram.com" className="ul-li-a">Əməkdaş partnyorlarımız və istehsal</a></li>
                    <li className="li-footer text-light"><a href="https://www.intagram.com" className="ul-li-a">Uğurlarımız və sertifkatlarımız</a></li>
                </ul>
            </div>
            <div className="footer-end">
               @ Created by Asif Rahimov
            </div>
        </div>
        </>
    )
}

export default Footer;