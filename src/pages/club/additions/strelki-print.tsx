import IStrelkiPrint from "./i-strelki-print";
import { Card } from 'antd';
import { Image } from 'antd';

export default function StrelkiPrint (props: IStrelkiPrint) {
return (
       <div className="grid">  
              <Card className="cardstrelki">       
                   <b>Фамилия:</b> {props.name} <br />
                   <b>Город:</b> {props.city} <br />
                   <b>Дата рождения:</b> {props.data} <br />
                   <b>Спортивный разряд:</b> {props.dan} <br />
                   <b>Стаж:</b> {props.work} <br /><br />
                   <div className="center"><Image src={props.imsrc} alt="strelki"/> </div>
               </Card> 
    </div>
)

}

