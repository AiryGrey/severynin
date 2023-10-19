import React, { useState } from 'react';
import "../App.css"
import {
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
  ScheduleOutlined,
  FileOutlined,
  PictureOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link } from "react-router-dom";
import SubMenu from 'antd/es/menu/SubMenu';

const GlavnoeMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

  return (
    <div style={{ width: 256 }} >
      <Button type="primary" size='large' onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu className='GlMenu'
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        //items={items}
       >
          <SubMenu key="sub1" title={<span><MenuOutlined /><span>Клуб</span></span>}> 
              <Menu.Item key="1"><Link to="/Osnova">О Северянине</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/StrelkiKluba">Стрелки клуба</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/Osnova">Рейтинг игроков</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/Osnova">Вступить в клуб</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/Osnova">Ресторан</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/Osnova">Детям</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/Osnova">Корпоративные мероприятия</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/Osnova">Положение о рейтинге стрелков</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="9"><Link to="/Osnova"><ScheduleOutlined /><span>Календарь соревнований</span></Link></Menu.Item>
          <SubMenu key="sub2" title={<span><FileOutlined /><span>Полезное</span></span>}> 
              <Menu.Item key="10"><Link to="/Osnova">Новости</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/Osnova">Правила соревнований по стендовой стрельбе</Link></Menu.Item>
              <Menu.Item key="12"><Link to="/Osnova">Официальные документы</Link></Menu.Item>
              <Menu.Item key="13"><Link to="/Osnova">Ссылки</Link></Menu.Item>
              <Menu.Item key="14"><Link to="/Osnova">Купить-продать</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><AppstoreOutlined /><span>Стрельба</span></span>}> 
              <Menu.Item key="15"><Link to="/Osnova">Прайс-лист</Link></Menu.Item>
              <Menu.Item key="16"><Link to="/Osnova">Площадки</Link></Menu.Item>
              <Menu.Item key="17"><Link to="/Osnova">Инструменты</Link></Menu.Item>
              <Menu.Item key="18"><Link to="/Osnova">Заказать турнир</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="19"><Link to="/Osnova"><PictureOutlined /><span>Альбомы</span></Link></Menu.Item>
          <SubMenu key="sub4" title={<span><HomeOutlined /><span>Контакты</span></span>}> 
              <Menu.Item key="20"><Link to="/ShemaProezda">Схема проезда</Link></Menu.Item>
              <Menu.Item key="21"><Link to="/Osnova">Руководство</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="22"><Link to="/Osnova"><ScheduleOutlined /><span>Предстоящие соревнования</span></Link></Menu.Item>
      </Menu>

    </div>
  );
};

export default GlavnoeMenu;
