import React, { Component } from 'react'
// import './Form.css'

class Form extends Component {
    state = {
          estadoFavorito: '',
          numero: '',
          vaiComparecer: '',
        };
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);

//     this.state = {
//       estadoFavorito: '',
//       numero: '',
//       vaiComparecer: '',

//     };
//   }


  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            <p>Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)</p>
            <div>
            <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
            </div>
          </label>
          <input
            type="number"
            name="numero"
            value={this.state.numero}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;