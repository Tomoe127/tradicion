import React,{Component} from "react";

import Grupo from "./Grupo_tradicion";

class Tradiciones extends Component{
  constructor(props){
    super(props);
    this.state={
      lista:Grupo.map((x) =>
      <article className="art-tradicion">
        <img className="img-tradicion" src={x.imagen}/>
        <h3 className="h3cab">{x.titulo}</h3>
      </article>
      )
    }
  };

  state={
    lista:null
  };
  render(){
    return(
      <div>
        <h1 className="h1cab">Nuestra tradicones</h1>
        {this.state.lista}
      </div>
    )
  }
}

export default Tradiciones;