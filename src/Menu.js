import React, {Component} from "react";

const items = ["Index", "Tradiciones", "Costumbres", "Museos", "Más viditados", "Contáctenos"];

class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      lista:items.map((it) => <a className="item" href="#">{it}</a>)
    }
  };

  state = {
    lista:[]
  };

  render(){
    return(
      <div>{this.state.lista}</div>
    )
  };
}

export default Menu;