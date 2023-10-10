import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HowItWorks from "./pages/howItWorks";
import Login from "./pages/login";
import Support from "./pages/support";
import PaymentSolutions from "./pages/paymentSolutions";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "./mainLayout.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        {<NavBar />}
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="support" element={<Support />} />
          <Route path="paymentSolutions" element={<PaymentSolutions />} />
          <Route path="/" element={<HowItWorks />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
