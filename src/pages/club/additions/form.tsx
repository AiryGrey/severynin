
import "../../../App.css";
import React from "react";

interface IForma {
  name: string
  tel: string
  pole: string
  button: string
  }

interface IState {
    name: string
    tel: string
    pole: string
    button: string
    }

export default class Forma extends React.Component <{}, IState> {
    constructor(props: IForma) {
        super(props)
        this.state = {
            name: "",
            tel: "",
            pole: "",
            button: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: event.target.value
        })
    }
    handleChange2(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            tel: event.target.value
        })
    }
    handleChange3(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            pole: event.target.value
        })
    }
    
    clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        this.setState({
           button: this.state.tel
        })
    }

    render() {
    return (
        <div>
        <h3 className="formah3">Вступить в клуб</h3>
        <form className="forma"> 
           <input type="text" placeholder="ФИО:" name="name" 
               onChange={this.handleChange}/>
           <input type="text" placeholder="Номер телефона:" name="tel" onChange={this.handleChange2} required/>
           <textarea placeholder="Есть ли у Вас знакомые среди членов клуба Северянин?" name='pole' onChange={this.handleChange3}></textarea>
           <button type="submit" className="formabutton" onClick={this.clickHandler}>Вступить в клуб</button>
        </form>
        <p>{this.state.name}</p>
        <p>{this.state.tel}</p>
        <p>{this.state.pole}</p>
        </div>
    );
};

}