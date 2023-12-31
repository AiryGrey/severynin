import "../../App.css";
import InstructorsPrint from "./instructors-print";
import {instructors} from "./instructors-baza";
import {Link} from "react-router-dom";

function Instructors() {
  return (
          <div className="osnova">
              <h2 className="zagolovok">Инструкторы</h2>
              {instructors.map(instructors =>
                 <InstructorsPrint
                    name={instructors.name}
                    tel={instructors.tel}
                    work={instructors.work}
                    imsrc={instructors.imsrc} />)}

                <h4>Заказать занятие с инструктором можно по единому телефону 993-35-50</h4>
                <p>Стоимость 1,5 - 2 часового индивидуального занятия с инструктором для одного человека составляет 2000 рублей, для двух человек - 3000 рублей, для трёх человек - 3500рублей, для четырёх человек - 4000рублей,для пяти человек - 5000рублей без учета стоимости запущенных тарелок и отстрелянных патронов. Занятие с оружием инструктора – 3000 рублей для одного человека, для группы - обговаривается с администрацией. Подробнее на странице <Link to='/Price' className="linktext">Прайс-лист</Link> в разделе Стрельба.</p>
                <p>Гости и клиенты клуба, желающие серьезно укрепить стрелковые навыки для спорта, могут построить индивидуальную программу занятий с инструктором. Подробнее на странице Школа Стрельбы.</p>
                <p>Уважаемые клиенты, не имеющие стрелкового опыта, перед занятием обязательно прочтите технику безопасности в разделе Новичкам, FAQ на нашем сайте. Соблюдение правил на стрелковом рубеже – залог вашей безопасности и безопасности окружающих.</p>
                <p>Указанные цены носят информационный характер и не являются публичной офертой. Все цены могут меняться, пожалуйста, уточняйте действующие цены по тел. 993-35-50 (среда-воскресенье с 10 до 18 ч).</p>
          </div>
  );
}
export default Instructors;
