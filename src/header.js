import React,{Component} from "react";

const imagenes = ["/img/img1.jpg","/img/img2.jpg","/img/img3.jpg","/img/img4.jpg","/img/img5.jpg","/img/img6.jpg","/img/img7.jpg"];

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      c:0
    }
  };
  state = {
    c:0
  };
  render(){
    setTimeout(() => this.setState({
      c: Math.floor(Math.random()*imagenes.length)
    }), 1000);
    return(
      <div>
        <h1 className="h1cab">Un viaje a las tradiciones del Perú</h1>
        <img className="imgcab" src={imagenes[this.state.c]}/>
      </div>
    )
  }
}

export default Header;