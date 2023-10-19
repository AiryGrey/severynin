
import "../App.css";
import React from 'react';
import p1 from '../img/log/1.png';
import p2 from '../img/log/2.png';
import p3 from '../img/log/3.png';
import p4 from '../img/log/4.png';
import p5 from '../img/log/5.png';
import p6 from '../img/log/6.png';
import p7 from '../img/log/7.png';
import p8 from '../img/log/8.png';
import p9 from '../img/log/9.png';
import p10 from '../img/log/10.png';

function Partnery() {
  return (
    <div>
        <div className="scroll">
          <h2 className="zag">Наши партнеры</h2>
        </div>
        <div  className="partnery">
          <img className="photo2" src={p1} alt="Partnery" />
          <img className="photo2" src={p2} alt="Partnery" />
          <img className="photo2" src={p3} alt="Partnery" />
          <img className="photo2" src={p4} alt="Partnery" />
          <img className="photo2" src={p5} alt="Partnery" />
          <img className="photo2" src={p6} alt="Partnery" />
          <img className="photo2" src={p7} alt="Partnery" />
          <img className="photo2" src={p8} alt="Partnery" />
          <img className="photo2" src={p9} alt="Partnery" />
          <img className="photo2" src={p10} alt="Partnery" />
        </div>
        <br />
    </div>
  );
}

export default Partnery;
