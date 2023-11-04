import "../../../App.css";
import React from 'react';
import {calendar_2022} from "./calendar-baza-2022";
import {FileOutlined } from '@ant-design/icons';
import ICalendar from "./i-calendar";
import {calendar_2021} from "./calendar-baza-2021";
import {calendar_2020} from "./calendar-baza-2020";
import {calendar_2019} from './calendar-baza-2019';
import {calendar_2018} from './calendar-baza-2018';
import {calendar_2017} from './calendar-baza-2017';

interface IInfo {
    k: string
}
const block = <tr className="tr">
        <th className="th_calendar">Дата</th><th className="th_calendar">Название</th>
        <th className="th_calendar">Стенд</th><th className="th_calendar">Город</th>
        <th className="th_calendar">Дисциплина</th><th className="th_calendar">Мишени</th>
        <th className="th_calendar">Положение</th><th className="th_calendar">Результаты</th></tr>;

function CalendarBaza({k}: IInfo) {
    let baza = [];
    let calendar: ICalendar[] = [];
    let state;
    let result;

    if (Number(k)===6) {calendar=calendar_2022;} 
    if (Number(k)===5) {calendar=calendar_2021;}
    if (Number(k)===4) {calendar=calendar_2020;}
    if (Number(k)===3) {calendar=calendar_2019;}
    if (Number(k)===2) {calendar=calendar_2018;}
    if (Number(k)===1) {calendar=calendar_2017;}

    for (let x=0; x<calendar.length; x++) {
        if (calendar[x].state_url==="") (state="ожидается"); 
             else (state=<div className="center"><a href={calendar[x].state_url} target="_blank" rel="noreferrer"><FileOutlined /></a></div>)
        if (calendar[x].result_url==="") (result="ожидается"); 
             else (result=<div className="center"><a  href={calendar[x].result_url} target="_blank" rel="noreferrer"><FileOutlined /></a></div>)

        baza.push(React.createElement('tr', {className: 'tr'}, 
          <><td className="td">{calendar[x].date}</td>
            <td className="td">{calendar[x].name}</td> 
            <td className="td">{calendar[x].stend}</td>
            <td className="td">{calendar[x].city}</td> 
            <td className="td">{calendar[x].discipline}</td>
            <td className="td">{calendar[x].target}</td>
            <td className="td">{state}</td>
            <td className="td">{result}</td></>));
    }
  return (
    <div><table className="table_calendar">
         {block} {baza.map(el => <>{el}</>)}</table>
    </div>
  );
}

export default CalendarBaza;