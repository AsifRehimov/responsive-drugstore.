import { RiMapPin2Fill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";



function About() {
   
    return(
        <>
  
        <div style={{paddingTop:"100px", color:"#198754"}}>
            <h3 style={{marginLeft:"50px", marginBottom:"60px"}}>Elaqe Vasiteleri:</h3>
           <a className="contact" href="https://www.google.com/maps/place/39%C2%B005'35.1%22N+48%C2%B031'37.9%22E/@39.0930961,48.5249973,553m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x63cf2c1516f01eb8!7e2!8m2!3d39.0930918!4d48.5271863"><RiMapPin2Fill/>Bakı ş. vunqtau küçəsi 18A</a><br/>
           <a className="contact" href="tel:+994556616793"><BsFillTelephoneFill/>  +994556616793</a><br/>
           <a className="contact" href="mailto:asifrhimov8gmail.com"><IoMdMail/>asifrhimov8@gmail.com</a>
        </div>
        </>
    )
}
export default About;
