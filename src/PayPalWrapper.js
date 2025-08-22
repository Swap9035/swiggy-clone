import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalWrapper({ children }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AUGwT1CDi4dodiFaAkmDzfOXSM1j_V8Qrq3Mq55k5spQHYhhjgMzlr2HYTeu7LAUM-Na0aSfNhbGlv3w", // From PayPal Developer Dashboard
        currency: "USD",
        intent: "CAPTURE"
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
