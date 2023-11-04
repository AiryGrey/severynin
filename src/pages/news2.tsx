
import "../../../App.css";
import React from "react";

interface IForma {
  
  }

export default class Forma extends React.Component {
    constructor(props: IForma) {
        super(props)
        this.state = {

        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: event.target.value
        })
        console.log("name", event.target.value)
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
        alert(event.target.value)
    }
    
    clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        this.setState({

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
        </div>
    );
};

}