// import {Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import Cards from './Card';
import Basket from './Basket';
import Badge from 'react-bootstrap/Badge';



const Products = ({ setShow, show, handleclick, card, setCard, handleChange, size, search}) => {





    return (
        <> 

            {show ? (<Cards handleclick={handleclick} search={search}/>)   : (<Basket card={card} setCard={setCard} handleChange={handleChange} />)
            }
            {
              show ?  (<div>
{               size === 0  ? "" : (<Badge className='bottom-0 end-0' bg="danger"  style={{ zIndex:"4" , marginRight: "30px", marginBottom: "60px", position: "fixed", background: "white", padding: "5px" }}>{size}</Badge>)
}                <FaShoppingCart cont className='bottom-0 end-0' onClick={() => setShow(false)} style={{ fontSize: "60px", color: "black", marginRight: "30px", marginBottom: "60px", position: "fixed", background: "rgb(217, 135, 3", borderRadius: "30%", padding: "10px" }} />
            </div>) : ""
            }
 
        </>
    );
}
export default Products;