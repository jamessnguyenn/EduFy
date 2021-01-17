
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins} from "@fortawesome/free-solid-svg-icons";
export default function Product({image, amount, name}){


    return(
    <div className="product">
      <img  className="product-image" src={image}/>
    <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-title"><FontAwesomeIcon className="coinIcon" icon={faCoins}/>  {amount}</h6>
        <button className="buy-now-btn" >Buy now</button>
      </div>
</div>
    );

}