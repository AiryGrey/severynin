import "../../App.css";
import { List } from 'antd';
import {news} from "./news-baza";
import NewsText from "./news-text";

function News() {
  return (
          <div className="osnova">
              <h2 className="zagolovok">Новости</h2> 
              <List itemLayout="vertical"
                    size="large" 
                    pagination={{onChange: (page) => {console.log(page);}, pageSize: 5,}}
                    dataSource={news}
                    renderItem={(item) => (
                        <List.Item key={item.name}>
                               <List.Item.Meta
                                   title={item.name}
                                   description={"Дата публикации новости: " + item.date}/>
                               <NewsText info={item.info} text={item.text} href={item.href} date={item.date} name={item.name}/>
                        </List.Item>
                    )}
               />
          </div>
  );
}

export default News;