import { useState, useEffect } from "react";


const Basket = ({card, setCard, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
      const arr = card.filter((item) => item.id !== id);
      setCard(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      card.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });

  
    return (
      <article className="article">
        {card.map((item) => (
            
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
               <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, -1)}>-</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, 1)}>+</button>
            </div>
            <div>
              <span>{(item.price*item.amount).toFixed(2)}</span>
              <button onClick={() => handleRemove(item.id)}>Ləğv et</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Yekun Məbləğ</span>
          <span>{price.toFixed(2)} AZN</span>
        </div>
      </article>
    );
}

export default Basket;