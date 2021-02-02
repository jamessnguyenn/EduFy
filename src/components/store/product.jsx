
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Product({image, amount, name, isDisable, isBought, index, subtractCoins, addBought}){

    const onClick = ()=>{
      subtractCoins(amount);
      if(index != 1 && index !=2 && index !=3 && index !=15){
      addBought(index);
      const req = {
        bought: index
      }
      axios.post(`https://edufy-space-api.herokuapp.com/users/${localStorage.getItem('user_id')}/bought`, req,{
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(res=>{
        console.log("Successfully added");
      })
      .catch(err=>{
        console.log(err);
      })
    }
    }
  return(
    <div className="product">
      <img  className="product-image" src={image}/>
    <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-title"><FontAwesomeIcon className="coinIcon" icon={faCoins}/>  {amount}</h6>
        {isBought? <button className="buy-now-btn">Select</button> : <button className="buy-now-btn" onClick={onClick} disabled={isDisable} >Buy now</button>}
      </div>
</div>
    );

}