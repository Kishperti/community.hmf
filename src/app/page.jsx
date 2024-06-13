import Image from "next/image";
import LandingPage from "@/pages/landingPage/page";
import Auth from "@/pages/authPage/page";
import Login from "@/pages/loginPage/page";
import Payment from "@/components/qrpayment";
import VerifyPayment from "@/components/verification";
import ForgotPassword from "@/components/forgotpass";

export default function Home() {
  return (
    <div>
      <LandingPage/>
      {/* <Auth/> */}
      {/* <Login/> */}
      {/* <Payment/> */}
      {/* <VerifyPayment/> */}
      {/* <ForgotPassword/> */}
    </div>
  );
}
