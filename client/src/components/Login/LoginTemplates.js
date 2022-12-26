import React from 'react';

class FluidInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        focused: false,
        value: ""
      };
    }
    focusField() {
      const { focused } = this.state;
      this.setState({
        focused: !focused
      });
    }
    handleChange(event) {
      const { target } = event;
      const { value } = target;
      this.setState({
        value: value
      });
    }
    render() {
      const { type, label, style, id } = this.props;
      const { focused, value } = this.state;
      
      let inputClass = "fluid-input";
      if (focused) {
        inputClass += " fluid-input--focus";
      } else if (value != "") {
        inputClass += " fluid-input--open";
      }
      
      return (
        <div className={inputClass} style={style}>
          <div className="fluid-input-holder">
            
            <input 
              className="fluid-input-input"
              type={type}
              id={id}
              onFocus={this.focusField.bind(this)}
              onBlur={this.focusField.bind(this)}
              onChange={this.props.onChange}
              autoComplete="off"
            />
            <label className="fluid-input-label" forhtml={id}>{label}</label>
            
          </div>
        </div>
      );
    }
  }
  
  class Button extends React.Component {
    render() {

      return (
        <div className={`button ${this.props.buttonClass}`} onClick={this.props.onClick}>
          {this.props.buttonText}
        </div>
      );
    }
  }
  
  class LoginErrorTemplate extends React.Component {

    handleError = e => {
        this.props.onClick( );
     }

    render() {
      
      const style = {
        margin: "15px 0"
      };


      return (

        <div className="login-container">
          <div className="title">
           Login Error
          </div>
           <Button buttonText="Try Again" buttonClass="login-button" onClick={this.handleError}/>
        </div>
      );
    }
  }
  
  class LoginContainer extends React.Component {

    state = {
      username: '',
      password: '',
    }

    handleChange = e => {
      this.setState({ [e.target.id]: e.target.value }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      })
    };

    handleSubmit = e => {
        var credentials = this.state;
        this.props.onClick(credentials);
    }

    render() {
      
      const style = {
        margin: "15px 0"
      };

     

      return (

        <div className="login-container">
          <div className="title">
           Login
          </div>
          <FluidInput name = "username" type="text" label="name" id="username" style={style} onChange={this.handleChange}/>
          <FluidInput name= "password" type="password" label="password" id="password" style={style} onChange={this.handleChange}/>
          <Button buttonText="log in" buttonClass="login-button" onClick={this.handleSubmit}/>
        </div>
      );
    }
  }

  


  export {Button, FluidInput, LoginContainer, LoginErrorTemplate};
  