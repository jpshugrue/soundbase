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
      return "Log in";
    } else {
      return "Sign up";
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

  renderErrors() {
    return(
      <ul className="errorRender">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
     return (
       <div className="session-form-container">
         <form onSubmit={this.handleSubmit} className="session-form-box">
           <span className="heading">{this.heading()}</span>
           <div className="divider"></div>
            <div className="login-form">
             <br/>
             <div className="input-item">
               <label>Username / email</label>
               <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}
                 className="session-form-inputbox"
               />
             </div>
             <div className="input-item">
               <label>Password</label>
               <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="session-form-inputbox"
               />
             </div>
             <div className="button-item">
               <input type="submit"
                 className="session-form-button"
                 value={this.heading()} />
             </div>
           </div>
            {this.renderErrors()}
            {this.alternateLink()}
         </form>
       </div>
     );
   }
}

// {this.renderErrors()}

export default withRouter(SessionForm);