import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Slider() {



    return (
        <div className='d-block'>
            <div className='img-sliders'>
                    
                <Carousel variant="dark" className=' sliders d-block karusel'>
                    <Carousel.Item>
                        <img
                            className="d-block img-slider w-100 justify-content-center"
                            src="https://www.westend61.de/images/0001110808pw/portrait-of-serious-doctor-leaning-against-a-wall-JOSF02816.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Kardioloq Dr.Şakir Mətləbov </h5>
                            <p>Bir həkim, ata və övlad kimi İtburnunu tövsiyyə edirəm.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-slider w-100 justify-content-center"
                            src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/serious-doctor-hospital.jpg?quality=82&strip=all"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Pediator Dr.Cavid Cəlilov </h5>
                            <p>Hər bir uşaq bir gələcəkdir. Gələcəyimiz isə bizə əmanətdir.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-slider w-100 justify-content-center"
                            src="https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1580196666465-doctor.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Stamatoloq Dr. Almaz Quliyeva</h5>
                            <p>
                                Çox gülək və heç utanmayaq. Eynən İtburnu kimi.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            <div className='d-block videos' >
                <h3 className='header-rose' >İtburnu və çiçəyi</h3>
                <video className='video  d-block' style={{ width: '100%', height: 'auto' }} src="https://v.ftcdn.net/04/41/00/12/700_F_441001219_oR3mRGh4rGLoavr0YnBF0bNAe3gXMZaY_ST.mp4" controls></video>
               <img src='https://as1.ftcdn.net/v2/jpg/04/65/12/68/1000_F_465126858_oNF4qfYIFpx5BUmhyYDTm8yCiLtPhLc5.jpg' alt='itburnu' style={{ width: '100%', height: 'auto', marginTop:'20px'}}/>
            </div>
            </div>

        </div>
    )
}
export default Slider;