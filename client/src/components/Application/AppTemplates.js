import React from 'react';
import logo from '../../assets/logo.png';

class FluidInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        focused: false,
        value: this.props.defaultValue
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
      
      let inputClass = "fluid-inputform";
      if (focused) {
        inputClass += " fluid-inputform--focus";
      } else if (value != "") {
        inputClass += " fluid-inputform--open";
      }
      
      return (
        <div className={inputClass} style={style}>
          <div className="fluid-inputform-holder">
            
            <input 
              className="fluid-inputform-input"
              type={type}
              id={id}
              defaultValue = {this.props.defaultValue}
              onFocus={this.focusField.bind(this)}
              onBlur={this.focusField.bind(this)}
              onChange={this.props.onChange}
              autoComplete="off"
            />
            <label className="fluid-inputform-label" forhtml={id}>{label}</label>
            
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
  
  class UpdatedTemplate extends React.Component {

    handleNext = e => {
        this.props.onClick( );
     }

    render() {
      
      const style = {
        margin: "15px 0"
      };

      return (

        <div className="wellcome-container">
          <div className="title">
            Your Record Has been Updated Succesfully
          </div>
           <Button buttonText="Back to Main" buttonClass="login-button" onClick={this.handleNext}/>
        </div>
      );
    }
  }

  class UpdateErrorTemplate extends React.Component {

    handleNext = e => {
        this.props.onClick( );
     }

    render() {
      
      const style = {
        margin: "15px 0"
      };

      return (

        <div className="wellcome-container">
          <div className="title">
            ERROR : Cannot Update your Info at this time
          </div>
          
          <Button buttonText="Back" buttonClass="login-button" onClick={this.handleNext}/>
           
        </div>





      );
    }
  }


  
  class EditTemplate extends React.Component {

    state = this.props.user_data;
     
    handleChange = e => {
      

      this.setState({ [e.target.id]: e.target.value }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      })
    };

    handleSubmit = e => {
        var credentials = this.state;

        var first;
        var last;
        if(credentials.first){
           first = credentials.first;
        } else {
           first = credentials.name.first;
        }
        if(credentials.last){
          last = credentials.last;
       } else {
          last = credentials.name.last;
       }


        credentials.name = {first:first, last:last};
        delete credentials.first;
        delete credentials.last;

        this.props.onClick(credentials);
    }

    handleLogout = e => {
      this.props.onClickLogout();
  }



    render() {
      
      const style = {
        margin: "10px 0"
      };

      return (

        <div className="wellcome-container">
          <img src={logo} width="60" height="50"></img>
          <br/>
            Update your Information :
          <br/>
          <br/>  
          <br/>
          <FluidInput defaultValue = {this.props.user_data.name.first} name = "first" type="text" label="First Name" id="first" style={style} onChange={this.handleChange}/>
          <FluidInput defaultValue = {this.props.user_data.name.last} name = "last" type="text" label="Last Name" id="last" style={style} onChange={this.handleChange}/>
          <FluidInput defaultValue = {this.props.user_data.company} name = "company" type="text" label="Company" id="company" style={style} onChange={this.handleChange}/>
          <FluidInput defaultValue = {this.props.user_data.phone} name = "company" type="text" label="Phone" id="phone" style={style} onChange={this.handleChange}/>
          <FluidInput defaultValue = {this.props.user_data.address} name = "address" type="text" label="Adress" id="address" style={style} onChange={this.handleChange}/>
        
          <Button buttonText="Update Your Data" buttonClass="login-button" onClick={this.handleSubmit}/>
          <Button buttonText="Logout" buttonClass="logout-button" onClick={this.handleLogout}/>
        </div>
      );
    }
  }

  class MainScreenTemplate extends React.Component {

    state = this.props.user_data;
     
    handleLogout = e => {
      this.props.onClickLogout();
    }

    handleSubmit = e => {
      this.props.onClick();
    }

    render() {
      
      const style = {
        margin: "10px 0"
      };

      return (

        <div className="wellcome-container">
           <img src={logo} width="60" height="50"></img>
          <div className="title">
          Wellcome {this.props.user_data.name.first} 
             
          <br/>
          Your Balance is :  {this.props.user_data.balance}    
          </div>
          <br/>

          <table class="styled-table">
    
          <tbody>
              <tr>
                  <td>Full Name :  </td>
                  <td>{this.props.user_data.name.first} {this.props.user_data.name.last}</td>
              </tr>
              <tr>
                  <td>Company</td>
                  <td>{this.props.user_data.company}</td>
              </tr>
              <tr>
                  <td>email</td>
                  <td>{this.props.user_data.email}</td>
              </tr>
              <tr>
                  <td>Phone</td>
                  <td>{this.props.user_data.phone}</td>
              </tr>
              <tr>
                  <td>Address</td>
                  <td>{this.props.user_data.address}</td>
              </tr>




            
          </tbody>
</table>

          <br/>  
          <Button buttonText="Edit your data" buttonClass="login-button" onClick={this.handleSubmit}/>
          <Button buttonText="Logout" buttonClass="logout-button" onClick={this.handleLogout}/>
        </div>
      );
    }
  }


  export {Button, FluidInput, MainScreenTemplate , EditTemplate  , UpdatedTemplate, UpdateErrorTemplate };
  