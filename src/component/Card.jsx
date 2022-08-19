import second from '../API/SecondApi';
import Card from 'react-bootstrap/Card';

const Cards = ({handleclick, search}) => {
    return(
       
                <div style={{display:"block", width:"100%", height:"auto", float:"left"}}>
                {
                    second.filter((val) =>{
                     return val
                    }).map((item) => {
                      return(
                     <div key={item.id} className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-block ' style={{ paddingTop:'100px', float:"left"}}>
                     <Card.Img variant="top" src={item.img}/>
                     <Card.Body className='ms-4 me-4'>
                       <Card.Title>{item.title}</Card.Title>
                       
                       <span className='text-danger fw-bold'>{item.price} {item.currency}</span>
                       <Card.Text>
                        {item.text}
                       </Card.Text>
                       <button onClick={()=>handleclick(item)} className="w-100 buy-button">Almaq</button>
                     </Card.Body>
                   </div>)
                  }) 
                }
                </div>
            )}
    
    

export default Cards;
