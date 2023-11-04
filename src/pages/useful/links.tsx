import "../../App.css";
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import {links} from "./links-baza";
import ILinks from "./i-links";

function Cards(props: ILinks) {
  return (
  <div className="gridcard">
       <p className="center">
          <Link to={props.href} className="linkcard" target="_blank" rel="noreferrer">
              <Card title={props.name} className="card" hoverable>
                  <img className="links" src={props.imsrc} alt="links"/>
              </Card> 
          </Link>
       </p>  
  </div>
  );
}

function Links() {
  return (
          <div className="osnova">
              <h2 className="zagolovok">Ссылки</h2> 
              <p className="center">
                {links.map(links =>
                  <Cards
                      name={links.name}
                      href={links.href}
                      imsrc={links.imsrc} />)} 
              </p>
          </div>
  );
}

export default Links;