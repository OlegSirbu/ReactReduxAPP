import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import toastr from 'toastr';
import {login} from '../../actions/userActions';

import Button from '../common/Button';

import TextField from 'material-ui/TextField';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      user: {
        username: '',
        password: ''
       } 
    };

    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this); 
  }

  onLogin(){
    const {username, password} = this.state.user;
    if(username === '' || password === '') return false;

    this.props.login({username, password})
      .then(res => {
        localStorage.setItem('_id', res.payload[0]._id);
        debugger
        this.context.router.push('/notes');
      }).catch(err => {

      });
  }

  onChange(event){
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  render() {
    return (
      <div>
        <TextField
          name="username"
          floatingLabelText='name'
          value={this.state.user.username}
          onChange={this.onChange}
        />

        <TextField
          type="password"
          name="password"
          floatingLabelText='password'
          value={this.state.user.password}
          onChange={this.onChange}
        />

        <Button label={'Login'} onClick={this.onLogin}/>
      </div>
    );
  }
}

LoginPage.propTypes = {};

LoginPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(){
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  login: ({username, password}) => dispatch(login({username, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
