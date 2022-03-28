import React, { Component } from "react";
import "./../../Styles/login.css";
import {Button, FormGroup,Form, Input} from 'reactstrap';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import {Redirect,Link} from "react-router-dom"; 
import logo from '../../assets/Logo/logo.ico';
class Login extends Component{ 
    state={
        email:"",
        password:"",
        ispassword:false,
        err: 0,
       
    };
    togglePassword = () => {
        const { ispassword } = this.state;
        this.setState({ ispassword: !ispassword });
      };
   
    handleSubmit =  () => {
      this.setState({email:this.state.email});
      this.setState({password:this.state.password});
      };

     

    render(){
        
      
        return(
           
            <div className="login">
                    <Form className="login-form">
                        <br/>
                        <h2 style={{fontWeight:"bold"}}>
                            
                            <img src={logo} className="loginimg" alt="notfound"  />
                        </h2>
                        <h4 align="center" style={{fontWeight:400,fontSize:"1.6rem",lineHeight:1.5,fontFamily:'Roboto'}}>Welcome back! Login with your Email or use social logins.</h4>
                        {this.state.err ? (
                        <label align="center" style={{ color: "red", fontSize: 16,marginTop:-50 }}>
                            Invalid Email ID or Password
                        </label>
        ) : null}
                        <h4 align="left" style={{fontWeight:"bold",fontFamily:'Roboto'}}>SIGN IN</h4>
                        <FormGroup className="input-group-lg">
                            <label className="label1">EMAIL ID</label>
                            <Input className="input-text" type="email" placeholder="Enter your email address"  required 
                            value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                        </FormGroup>
                        <FormGroup className="input-group-lg">
                            <label className="label2">PASSWORD</label>
                            <Input className="input-text"  type={this.state.ispassword ? "text" : "password"} required placeholder="Enter your password" 
                            value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
                            {this.state.ispassword ? (
                                    <AiFillEyeInvisible
                                    className="password-icon"
                                    onClick={this.togglePassword}
                                     />
                                ) : (
                                 <AiFillEye
                                    className="password-icon"
                                    onClick={this.togglePassword}
                                    />
                                    )}
                        </FormGroup>
                       
                        <Link to="/forgotpassword" className="forgotpwd">
                            Forgot password
                        </Link>
                        <br/><br/>
                        <Link to="/attendance"><Button className="btn-login" color="primary"  onClick={()=>this.handleSubmit()} >
                            SIGN IN  
                        </Button></Link><br/><br/>
                       
                    </Form>
                    </div>
            )
      
    }
   

}

export default Login;



