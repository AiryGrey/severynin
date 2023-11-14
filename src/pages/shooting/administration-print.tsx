import IInstrictors from "./i-instructors";
import { Card } from 'antd';
import { Image } from 'antd';

export default function AdministrationPrint (props: IInstrictors) {
return (
       <div className="grid">  
              <Card className="cardinstructors">  
                 <p className="center">
                   <div className="instructors"><Image src={props.imsrc} alt="instr"/> </div><p/>    
                   <b> {props.name} </b><p/>
                   {props.work} <p/>
                   Телефон: {props.tel} <p/>
                 </p>
               </Card> 
    </div>
)

}

