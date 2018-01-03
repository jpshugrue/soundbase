import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  alternateLink() {
    if (this.props.formType === 'login') {
     return <div className="session-form-altlink">
       Don’t have an account? <Link to="/signup">Sign up</Link>
     </div>;
   } else {
     return <div className="session-form-altlink">
       Already have an account? <Link to="/login">Log in</Link>
     </div>;
   }
  }

  heading() {
    if (this.props.formType === 'login') {
      return <h3>Log in</h3>;
    } else {
      return <h3>Sign up</h3>;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  render() {
     return (
       <div className="session-form-container">
         <form onSubmit={this.handleSubmit} className="session-form-box">
           {this.heading()}
            <div className="login-form">
             <br/>
             <label>Username / email
               <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}
                 className="session-form-inputbox"
               />
             </label>
             <br/>
             <label>Password
               <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="session-form-inputbox"
               />
             </label>
             <br/>
             <input type="submit" value="Submit" />
           </div>
            {this.alternateLink()}

         </form>
       </div>
     );
   }
}

// {this.renderErrors()}

export default withRouter(SessionForm);
