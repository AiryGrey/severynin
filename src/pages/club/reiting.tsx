import "../../App.css";
import React from 'react';
import {reiting, reiting_unior, reiting_vet, reiting_supervet} from "./additions/reiting-baza";

let block = <tr className="tr">
        <th className="th">Фамилия, имя</th>
        <th className="th">1 Этап</th><th className="th"></th></tr>;

function Reiting() {
    let man = []
    let unior = []
    let veteran = []
    let superveteran = []

    for (let x=0; x<reiting.length; x++)
    man.push(React.createElement('tr', {className: 'tr'}, 
          <><td className="td">{reiting[x].name}</td> 
          <td className="td">{reiting[x].result}</td> <td className="td"></td></>));

    for (let x=0; x<reiting_unior.length; x++)
    unior.push(React.createElement('tr', {className: 'tr'}, 
          <><td className="td">{reiting_unior[x].name}</td> 
          <td className="td">{reiting_unior[x].result}</td> <td className="td"></td></>));

    for (let x=0; x<reiting_vet.length; x++)
    veteran.push(React.createElement('tr', {className: 'tr'}, 
          <><td className="td">{reiting_vet[x].name}</td> 
          <td className="td">{reiting_vet[x].result}</td> <td className="td"></td></>));

    for (let x=0; x<reiting_supervet.length; x++)
    superveteran.push(React.createElement('tr', {className: 'tr'}, 
          <><td className="td">{reiting_supervet[x].name}</td> 
          <td className="td">{reiting_supervet[x].result}</td> <td className="td"></td></>)); 

  return (
        <div className="osnova">
            <h2 className="zagolovok">Рейтинг стрелков</h2>
              <table className="table">
                <tr className="tr"><th colSpan={3} className="th">Мужчины</th></tr>
                {block}
                {man.map(el => <>{el}</>)}
                <tr className="tr"><th colSpan={3} className="th">Юниоры</th></tr>
                {block}
                {unior.map(el => <>{el}</>)}
                <tr className="tr"><th colSpan={3} className="th">Ветераны</th></tr>
                {block}
                {veteran.map(el => <>{el}</>)}
                <tr className="tr"><th colSpan={3} className="th">Суперветераны</th></tr>
                {block}
                {superveteran.map(el => <>{el}</>)}
              </table>
          </div>
  );
}

export default Reiting;