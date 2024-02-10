import React from "react";
import "./Footer.css";
import mail from "../../assets/img/ggg.png";
import phonefooter from "../../assets/img/phonefooterok.png";
import emoji from "../../assets/img/emojiok.png";

function Fotter() {
  return (
    <footer class="footer">
      <hr />
      <div class="footer-content">
        <div className="footer-icon">
          <span>
            <img className="img-mail-footer" src={emoji} alt="" />
          </span>
          <p className="p-footer">Teresa Chaves Maza</p>
        </div>
        <div className="footer-icon">
          <span>
            <img className="img-mail-footer" src={phonefooter} alt="" />
          </span>
          <p className="p-footer">600700231</p>
        </div>
        <a href={`mailto:ttachaves@hotmail.com`}>
          <span>
            <img className="img-mail-footer" src={mail} alt="" />
          </span>
          <button className="vvd">
            <span>ttachaves@hotmail.com</span>
          </button>
        </a>
      </div>
    </footer>
  );
}
export default Fotter;
