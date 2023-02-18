import { Link } from "react-router-dom";
import styles from "../components/Jumbotron.css";
import React from 'react';
//import ReactDOM from 'react-dom/client';


const USER_STORAGE_KEY="GYM_SQUAD_USERS";

/*
const Login = () => {
        console.log(  localStorage.getItem(USER_STORAGE_KEY ));
        return (<LoginForm  />);

}
*/

function Login() {
   //  console.log(  localStorage.getItem(USER_STORAGE_KEY ));
   return (<LoginForm  />);
 }



class LoginForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isSubmitted: false};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateResponses(event) {
        return ;
    }

    handleSubmit(event) {
        this.validateResponses(event);

        let email1= event.target.inputEmail.value;
        let password1= event.target.inputPassword.value;

        this.setState({isSubmitted: true});
        event.preventDefault();
    }
      
 
    render() {
       // alert('state value: ' + this.state.isSubmitted);
        if (this.state.isSubmitted) {
           
            return(
      <p>User registration successful. Please login.</p>);
        } else 
      return (
   <div className="jumbotron jumbotron-fluid ">

    <div id="reg-heading" className="container w-25  float-right">
    <form onSubmit={this.handleSubmit}>
    <div className="form-row">
        <div className="form-group">
            <label className="text-light" htmlFor="inputEmail">Email Address</label>
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email address" required/>
        </div>
    </div>
    <div className="form-row">
        <div className="form-group">
            <label className="text-light" htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
        </div>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>

    <div className="container-fluid">
        <div className="planbox">
        <p className=" plantext"> New to the fitness? Or just tired of developing your own workout plan?</p>
        <p className=" plantext"> Click below to generate your own personalised plan!</p>
        <Link role="button" className="btn btn-primary btn-lg" to="/user">Get Started</Link>
        </div>
    </div>
</div>
      );
    }
}

export default Login;