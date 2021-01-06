import React from "react";
import kobe from "../../Assets/Images/gif/kobe-gif.gif";

import "./Modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <img src={kobe} alt="" />
      <h3>
        Please wait... <br /> for the <br /> Buzzer Beater! <br /> ⏰
      </h3>
    </div>
  );
};

export default Modal;
