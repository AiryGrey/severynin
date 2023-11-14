import "../App.css";
import AdministrationPrint from "./shooting/administration-print";
import {administration} from "./shooting/administration-baza";

function Administration() {
  return (
          <div className="osnova">
              <h2 className="zagolovok">Руководство</h2>
              {administration.map(administration =>
                 <AdministrationPrint
                    name={administration.name}
                    tel={administration.tel}
                    work={administration.work}
                    imsrc={administration.imsrc} />)}

                <p className="center"><h4>Телефон клуба +7 (812) 993-35-50 (для всех вопросов)</h4>
                <p>Мы ждём Ваших предложений и пожеланий! Наш e-mail: psk-severyanin@mail.ru</p></p>
          </div>
  );
}
export default Administration;
