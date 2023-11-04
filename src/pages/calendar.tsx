import "../App.css";
import {Tabs} from "antd";
import CalendarBaza from "./club/additions/calendar-baza";

function Calendar() {
  return (
        <div className="osnova">
            <h2 className="zagolovok">Календарь</h2>
         
            <Tabs defaultActiveKey="tab6" size='large'>
                <Tabs.TabPane tab=" 2017 " key="tab1">
                        <CalendarBaza k='1' />
                </Tabs.TabPane>
                <Tabs.TabPane tab=" 2018 " key="tab2">
                        <CalendarBaza k='2' />
                </Tabs.TabPane>
                <Tabs.TabPane tab=" 2019 " key="tab3">
                    <CalendarBaza k='3' />
                </Tabs.TabPane>
                <Tabs.TabPane tab=" 2020 " key="tab4">
                    <CalendarBaza k='4' />
                </Tabs.TabPane>
                <Tabs.TabPane tab=" 2021 " key="tab5">
                    <CalendarBaza k='5' />
                </Tabs.TabPane>
                <Tabs.TabPane tab=" 2022 " key="tab6">
                    <CalendarBaza k='6' />
                </Tabs.TabPane>
            </Tabs>

          </div>
  );
}

export default Calendar;