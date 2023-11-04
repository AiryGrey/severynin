import React from 'react';
import INews from './i-news';
import { Collapse, List } from 'antd';

function NewsText (props: INews) {
    let info = []
    let text = []
    let more

    for (let x=0; x<props.info.length; x++) {
        info.push(React.createElement('div', null, props.info[x]));
    };

    for (let x=0; x<props.text.length; x++) {
        text.push(React.createElement('div', null, <p>{props.text[x]}</p>));
    };

    if (props.href!=='') {more=<a href={props.href} target="_blank" rel="noreferrer">  
                                <List bordered className='listmore' size='small'><List.Item>Подробнее</List.Item></List>  </a>}
       else {more=<Collapse className='more' collapsible="header" items={[{label: 'Подробнее', children: <p>{text}</p>,},]}/>}
   

    return (
        <>
         {info.map(el => <p>{el}</p>)}
         {more}
        </>
    )
}
export default NewsText;