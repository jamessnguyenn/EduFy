import NavBar from '../navbar/navbar';
import './store.css';
import Product from './product';
export default function Store(){

    return(
        <div>
          <NavBar/>
          <div className="store-header">
                <div className="footer-container">
                    <h1 className="footerTitle"> Time for your Rewards</h1>
                </div>
            </div>
         <Product/>
        </div>

    );
    
}
