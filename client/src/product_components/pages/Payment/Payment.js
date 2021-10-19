import NavBar from "../../../NavbarFooter/NavBar";
import Footer from "../../../NavbarFooter/Footer";

import style from "./Payment.module.css";

function Payment() {
  return (
    <div>
      {/* <img src={Navbar} style={{ width: "100%" }} alt="" /> */}
      <NavBar />
      <div className={style.title}>
        <div className="container">
          <h2>Payment</h2>
        </div>
      </div>

      <div className={style.description}>
        <div className="container">
          <h3>Proof of Payment</h3>
          <p>To complete ordering, please upload your proof of payment.</p>
        </div>
      </div>

      <div className={style.upload}>
        <div className="container">
          <input type="file" className={style.file_upload} />
          <button>UPLOAD</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Payment;
