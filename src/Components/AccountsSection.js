import PayWithPayPal from "../Components/PayWithPayPal";
import { PayPalButtons } from "@paypal/react-paypal-js";
const AccountsSection = ({totalPrice})=>{
    return(
        <div className="account">
            <div className="account__items">
                <div className="account__section">
                    <h3>Account  Section</h3>
                    <p>To place an order now , log in to your existing account or sign up</p>
                    <div>
                        <div>
                            <h3>Have an Account</h3>
                            <p>Log In</p>
                        </div>
                        <div>
                            <p>New to Food Web?</p>
                            <p>SIGN UP</p>
                        </div>
                         
                    </div>
                </div>
                <div>

                <img src="/images/ROLL.avif"></img>

            </div>

            </div> 

    <div className="account__items">
        <h3>Delivery Address</h3>
    </div>
    
    <div className="account__items">
        <div className="account__section">
            <h3>Payment</h3>
               <p>To place an order now , log in to your existing account or sign up</p>
               <div>
                <PayWithPayPal totalPrice={totalPrice} />
               </div>

        </div>
    </div>
            
            
        </div>

    );
};
export default AccountsSection;