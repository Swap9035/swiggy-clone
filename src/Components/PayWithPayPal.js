import { PayPalButtons } from "@paypal/react-paypal-js";

const PaywithPayPal = ({ totalPrice }) => {
  return (
    <div>
      <h3>Total: ₹{totalPrice}</h3>

      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: totalPrice.toFixed(2),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        }}
      />
    </div>
  );
};

export default PaywithPayPal;
