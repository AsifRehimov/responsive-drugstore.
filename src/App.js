import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import About from './component/About';
import HomePage from './component/HomePage';
import Products from './component/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './component/Navbar';
import Footer from "./component/Footer";
import Register from "./component/Register";
import { useState } from "react";


const App = () => {

  const[show, setShow] = useState(true)
  const[card, setCard] = useState([])
  const[search, setSearch] = useState('')

  const handleclick = (item) =>{
    if(card.indexOf(item) !== -1 )return;
      setCard([...card, item])
  }
  
  const handleChange = (item,d) =>{
    const ind = card.indexOf(item);
    const arr = card;
    arr[ind].amount += d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCard([...arr]);
  }

  // useEffect(() =>{
  //   console.log(search);
  // }, [search])

  return ( 
    <BrowserRouter>
       <Navbars setShow={setShow} setSearch={setSearch}/>
        <div>
          <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/product" element={<Products search={search} size={card.length} setShow={setShow} handleclick={handleclick} show={show} card={card} setCard={setCard} handleChange={handleChange}/>}/> 
            <Route path="/" element={<HomePage/>}/>   
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>

  );
}

export default App;
