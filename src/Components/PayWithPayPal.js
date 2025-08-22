// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
// import React , {useState} from "react";

// function PaywithPayPal({ totalPrice }) {
//   const [{ isPending }] = usePayPalScriptReducer();
//   const [showButtons, setShowButtons] = useState(false);

//   if (!totalPrice || totalPrice <= 0) return null;

//   return (
//     <div>
//       <h3>Total: ₹ {totalPrice}</h3>
//       <button
//         onClick={() => setShowButtons(true)}
//         style={{ display: showButtons ? "none" : "inline-block" }}
//       >
//         PAY NOW
//       </button>
//       {showButtons && (
//         <PayPalButtons
//           style={{ layout: "vertical" }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     value: totalPrice.toFixed(2),
//                   },
//                 },
//               ],
//             });
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then((details) => {
//               alert(`Payment completed by ${details.payer.name.given_name}`);
//               console.log("Payment details:", details);
//               // Optionally clear cart or send order details to backend here
//             });
//           }}
//           onError={(err) => {
//             console.error("PayPal Checkout Error:", err);
//             alert("Something went wrong with the payment. Please try again.");
//           }}
//         />
//       )}
//     </div>
//   );
// }
// export default PaywithPayPal;

import { PayPalButtons } from "@paypal/react-paypal-js";

function PayWithPayPal({ amount }) {
  if (!amount || amount <= 0) return null;

  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{ amount: { value: amount.toFixed(2) } }],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Payment completed by ${details.payer.name.given_name}`);
          // You can clear the cart or show confirmation here
        });
      }}
      onError={() => {
        alert("Something went wrong with PayPal. Please try again.");
      }}
      style={{ layout: "vertical" }}
    />
  );
}

export default PayWithPayPal;
