import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createUser} from '../../actions/userActions';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import toastr from 'toastr';

const style = {
  margin: '0 auto',
  width: '257px'
};

class CreateUserPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        username: '', 
        email: '', 
        password: '', 
        passwordConfirm: ''
      },
      saving: false
    };

    this.onCreateUser = this.onCreateUser.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  onCreateUser(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.createUser(this.state.user)
      .then(() => {
        toastr.success('Succes create new use');
        this.redirect();
      })
      .catch(err => {
        toastr.error('Error in save note', err.response.data);
        this.setState({saving: false});
      })
  }

  redirect(){
    this.setState({saving: false});
    debugger;
    this.context.router.push('/notes');
  }

  render() {
    return (
      <div>
        <h1>Create new user</h1>
        <div style={style}>
          <TextInput
              name="username"
              label="name"
              value={this.state.name}
              onChange={this.onChange}
          />
          <TextInput
              name="email"
              label="email"
              value={this.state.email}
              onChange={this.onChange}
          />
          <TextInput
              type="password"
              name="password"
              label="Password"
              value={this.state.password}
              onChange={this.onChange}
          />
          <TextInput
              type="password"
              name="passwordConfirm"
              label="Password confirm"
              value={this.state.passwordConfirm}
              onChange={this.onChange}
          />
          
          <Button label={'Save'} onClick={this.onCreateUser}/>
        </div>
      </div>
    );
  }
}
CreateUserPage.contextTypes = {
  router: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
  createUser: (params) => dispatch(createUser(params))
});

export default connect(()=>{return {}}, mapDispatchToProps)(CreateUserPage);
