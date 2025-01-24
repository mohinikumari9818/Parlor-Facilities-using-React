import { useState } from "react";
import './Card.css'
function Card({ id, name, info, image, price, removeParlour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore? info:`${info.substring(0, 100)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt={name} />
      <div>
        <div className="parlour-details">
          <h4 className="parlour-price">{price}</h4>
          <h4 className="parlour-name">{name}</h4>
        </div>
        <div className="description">
          {readmore ? info : description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show less` : `Read more`}
          </span>
        </div>
      </div>
      <button className="red-bttn" onClick={() => removeParlour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
