import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalWrapper({ children }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "ARU7j1Qg-HnPzMUZwV7381v7oBWJJ3o871u0dJ9f__ScxjYL5WDs-sA4O2FCno0IuhfYKlElfIHA3sjT", // From PayPal Developer Dashboard
        currency: "USD",
        intent: "CAPTURE"
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
