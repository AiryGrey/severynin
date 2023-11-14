import "../App.css"
import React from "react";
import {
    InstagramOutlined,
    FacebookOutlined,
    } from '@ant-design/icons';

function Footer() {
  return (
    <div className="footer">
       
        <div className="iconki">
            <img src="/image/vk.png" width="15px" alt="vk" /> <br /><br />
            <InstagramOutlined /><br /><br />
            <FacebookOutlined />
        </div>

        <div className="foot">
            <ul>
                <li><a href="/Osnova">Клуб</a></li>
                <li><a href="/Calendar">Соревнования</a></li>
                <li><a href="/Documents">Документы</a></li>
                <li><a href="/Links">Ссылки</a></li>
                <li><a href="/JoinClub">Вступить в клуб</a></li>
                <li><a href="/News">Новости</a></li>
                <li><a href="/Price">Прайс-лист</a></li>
                <li><a href="/Area">Площадки</a></li>
                <li><a href="/Instructors">Инструкторы</a></li>
                <li><a href="/Administration">Руководство</a></li>
            </ul>
        </div>

        <div className="foot">
            <ul>
                <li><a href="/Tourney">Заказать турнир</a></li>
                <li><a href="/Restoran">Кафе</a></li>
                <li><a href="/Albums">Альбомы</a></li>
                <li><a href="/Deti">Детям</a></li>
                <li><a href="/Corporate">Корпоративные мероприятия</a></li>
                <li><a href="/Reiting">Рейтинг стрелков</a></li>
                <li><a href="/StrelkiKluba">Стрелки клуба</a></li>
                <li><a href="/JoinClub">Вступить в клуб</a></li>
                <li><a href="/Osnova">О Северянине</a></li>
                <li><a href="/"> </a></li>
            </ul>
        </div>

        <div className="foot1">
           <h4>График работы: <br />
               Ср-Вc 10:00-18:00, Пн, Вт - выходной <br /></h4>
               <h2>+7 (812) 993-35-50</h2>
            psk-severyanin@mail.ru <br />
            <a href="/ShemaProezda">Схема проезда </a><br />
            © 2013-2021 Стрелковый клуб “Северянин”
        </div>
    
    </div>
  );
}

export default Footer;