import "../App.css"
import i1 from '../img/i1.jpg';
import i2 from '../img/i2.jpg';
import i3 from '../img/i3.jpg';
import i4 from '../img/i4.jpg';

function Shema_proezda() {
  return (
          <div className="osnova">
              <h2 className="zag">Схема проезда</h2>
              <p>График работы:<br />
                Среда - воскресенье 10:00-18:00.<br />
                Продление рабочего дня возможно по договоренности по тел. 993-35-50, стоимость 1500 руб./час.</p>
              <p>Понедельник, Вторник - выходной.</p>
              <p>Стрелковый комплекс “Северянин” расположен в Колпинском районе г. Санкт-Петербург: Вознесенское шоссе, 2-й съезд налево от Южной улицы (смотрите схему и видео проезда).</p>
              <p className="center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5976.78239720525!2d30.64952966987821!3d59.76665573730197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46bd882696afd013%3A0x87416ffb345c7fc7!2z0KHQtdCy0LXRgNGP0L3QuNC9!5e0!3m2!1sru!2sru!4v1697569685567!5m2!1sru!2sru" width="700" height="450"   loading="lazy"></iframe>
              </p>
              <br /><br />
              
          </div>
  );
}

export default Shema_proezda;