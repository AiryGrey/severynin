import "../../App.css";
import React from "react";
import { Card, Image } from 'antd';

function CardArea() {
    let p = []
    for (let x=1; x<9; x++) {
       let s="/image/area/ground"+x+".png";
       p.push(React.createElement('div', null, <Card className="cardarea"><Image className="imgarea" src={s} alt="area"/></Card>));
    }
    return (<>
              {p.map(el => <>{el}</>)} </>
           );
}

function Area() {
  return (
          <div className="osnova">
              <h2 className="zagolovok">Площадки</h2>
              
              <div className="blue">
                <p>К услугам как опытных, так и начинающих стрелков, 8 полностью оборудованных площадок для спортивной стрельбы. Регулярно команда нашего комплекса подбирает интересные полеты тарелок для каждой площадки, чтобы гости нашего комплекса были всегда готовы к новым “сценариям” как на тренировках, так и на соревнованиях.</p>
                <p>Информация о полетах на сайте обновляется каждый месяц. Последнее обновление 01.07.2023. Ознакомиться с полетами вы можете на схемах ниже</p>  
              </div>
             
              <div className="gridarea">
                  <CardArea />
              </div>
 
          </div>
  );
}
export default Area;
