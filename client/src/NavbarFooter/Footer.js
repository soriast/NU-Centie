import style from "./Footer.module.css";
import nu_logo from "../assets/nu_logo.png";

function Footer() {
  return (
    <footer className={style.container}>
      <img src={nu_logo} alt="" />
      <h3>NU INNOVATION TECH HUB</h3>
      <h5>Center for Innovation &amp; Entrepreneurship</h5>
    </footer>
  );
}

export default Footer;
