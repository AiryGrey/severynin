import "../../App.css"
import Forma from "./additions/form";
import Form2 from "./additions/form2"

function JoinClub() {
  return (
          <div className="osnova">
              <h2 className="zagolovok">Вступить в клуб</h2>

              <div className="blok_photo">
                <p className="center">
                <img className="photo1" src="/image/sever/vst1.jpg" alt="Фото" />
                <img className="photo1" src="/image/sever/vst2.jpg" alt="Фото" />
                <img className="photo1" src="/image/sever/vst3.jpg" alt="Фото" /></p>
              </div>
              
              <p>В 2022 году членами клуба стали 90 спортсменов и любителей этого вида стрелкового спорта.</p>
              <p>Организационно правовая форма клуба - некоммерческое партнерство. Стоимость годового членского взноса для членов клуба на 2023 год составит 10.000 рублей и даёт её владельцу возможность участвовать в жизни клуба и получать льготы при стрельбе на площадках клуба. </p>
              <p></p>
              <h3>Каждый член Клуба получает следующие привилегии и скидки на территории клуба.</h3>
              
              <ol>
                 <li>Наличие минимум одного места на авто-парковке.</li>
                 <li>Устанавливается льготная цена одной «мишени в воздухе». </li>
                 <li>Право на участие в российских соревнованиях и чемпионатах от имени Клуба.</li>
                 <li>Право на участие в международных соревнованиях и чемпионатах от имени Клуба.</li>
                 <li>Право на безвозмездную помощь в оформлении документов и сбора согласований для участия в российских и международных соревнованиях и чемпионатах от имени Клуба.</li>
                 <li>10 % скидки на проведение мероприятий.</li>
                 <li>Право проводить пикники и другие семейные или корпоративные мероприятия на территории Клуба, согласованные с администрацией не позднее, чем за 1 неделю.</li>
              </ol>

              <div className="blue">"Стрелковый клуб "Северянин" это в-первую очередь сообщество друзей-единомышленников, объединенных общей страстью и хобби - стендовой стрельбой - и только во вторую формальная организация. Мы гордимся той атмосферой, которую удалось создать в нашем клубе, и будем рады приветствовать в нем новых членов".</div>
              <br/>
              <div className="blue">Указанные цены носят информационный характер и не являются публичной офертой. Все цены могут меняться, пожалуйста, уточняйте действующие цены по тел. 993-35-50 (среда-воскресенье с 10 до 18 ч).</div>
              <br /><br />

              <Forma />
              <br/>
              <Form2 />

          </div>
  );
}

export default JoinClub;
