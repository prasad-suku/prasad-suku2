import QRCode from "qrcode.react";
import React, { useState } from "react";
import "./index.css";

function Qrcodegenerator() {
  let [value, setvalue] = useState("");
  let [qr, setqr] = useState("");

  let handlechange = (e) => {
    setvalue(e.target.value);
  };

  let handlegenerate = () => {
    setqr(value);
    setvalue("");
  };

  return (
    <>
      <div className="container">
        <div className="input-group">
          <h2 className="mb-4">QR Generator</h2>
          <input type="text" onChange={handlechange} className="form-control" />
        </div>

        {/* genrete btn */}

        <button className="btn btn-primary" onClick={handlegenerate}>
          Generate
        </button>
        {/* qr generated */}
        <div className="qr-section">
          {qr && <QRCode value="qr" size={100} />}
        </div>
      </div>
    </>
  );
}

export default Qrcodegenerator;
