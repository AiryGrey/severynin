import "../App.css"
import React from "react";
import {
    InstagramOutlined,
    FacebookOutlined,
    } from '@ant-design/icons';
import vk from "../img/vk.png";

function Footer() {
  return (
    <div className="footer">
       
        <div className="iconki">
            <img src={vk} width="15px" /> <br /><br />
            <InstagramOutlined /><br /><br />
            <FacebookOutlined />
        </div>

        <div className="foot">
            <ul>
                <li><a href="">Клуб</a></li>
                <li><a href="">Соревнования</a></li>
                <li><a href="">Статьи</a></li>
                <li><a href="">Ссылки</a></li>
                <li><a href="">Новичкам</a></li>
                <li><a href="">Купить-продать</a></li>
                <li><a href="">Прайс-лист</a></li>
                <li><a href="">Площадки</a></li>
                <li><a href="">Инструкторы</a></li>
                <li><a href="">Школа стрельбы</a></li>
            </ul>
        </div>

        <div className="foot">
            <ul>
                <li><a href="">Заказать турнир</a></li>
                <li><a href="">Кафе</a></li>
                <li><a href="">Альбомы</a></li>
                <li><a href="">Детям</a></li>
                <li><a href="">Корпоративные мероприятия</a></li>
                <li><a href="">Рейтинг стрелков</a></li>
                <li><a href="">Стрелки клуба</a></li>
                <li><a href="">Вступить в клуб</a></li>
                <li><a href="">О Северянине</a></li>
                <li><a href=""> </a></li>
            </ul>
        </div>

        <div className="foot1">
           <h4>График работы: <br />
               Ср-Вc 10:00-18:00, Пн, Вт - выходной <br /></h4>
               <h2>+7 (812) 993-35-50</h2>
            psk-severyanin@mail.ru <br />
            <a href="">Схема проезда </a><br />
            © 2013-2021 Стрелковый клуб “Северянин”
        </div>
    
    </div>
  );
}

export default Footer;