import React, { useState } from "react";
import RightNav from "./RightNav";
import "./Button.scss";

const Button = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          animation: open ? "" : "bounce 1.6s infinite",
        }}
        className="button"
        open={open}
        onClick={() => setOpen(!open)}
      />
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Button;
