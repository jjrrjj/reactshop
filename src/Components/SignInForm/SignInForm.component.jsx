import React, { Component } from 'react';


const MyCustomButton = ({children,...other}) => {
  return(
    <button {...other}>{children}</button>
  ); 
}

const MyCustomInput = ({onChange,...other}) => {
  return (
    <input onChange={onChange} {...other}/>
  )
}

class SignInForm extends Component {

  state = {
    email : "",
    password : "",
    errors : {}
  }

  checkErrors = () => {
    let err = {};
    if(this.state.email === ""){
      err.email = "Enter your email";
    }
    if(this.state.password === ""){
      err.password = "Enter your password";
    }
    return err;
  }

  handleChange = (e) => {
    let {name,value} = e.target;
    this.setState({[name] : value});
  }

  handleSubmit = (e) => {
  e.preventDefault();
  let res = this.checkErrors();
  if(Object.keys(res).length){
    console.log("some error")
    this.setState({errors : res})
  }else{
    console.log("ok to submit form")
  }

  }

  render() {

    let len = Object.keys(this.state.errors);
    let err = this.state.errors;

    return (
      <div className="signInFormContainer">
        <form onSubmit={this.handleSubmit}>
          Email : 
          <MyCustomInput name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
           {err.email && err.email }
            <br />
          Password : 
          <MyCustomInput name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          {err.password && err.password }
          <br />
          <MyCustomButton type="submit">Submit</MyCustomButton>
        </form>
        {this.state.username}
      </div>
    );
  }
}

export default SignInForm;