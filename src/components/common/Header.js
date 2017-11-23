import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initalTab : '0'
    };
    this.setTab = this.setTab.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  setTab(){
    switch (window.location.pathname) {
      case '/notes':
      case '/note':
      case '/note/':
      case `/note/${this.props.params.id}`:
        this.setState({initalTab: '1'});
        break;
      case '/finance':
      case `/bank/${this.props.params.id}`:
        this.setState({initalTab: '2'});
        break;
      default:
        this.setState({initalTab: '0'});
    }
  }

  componentDidMount() {
    this.setTab();
  }

  componentWillReceiveProps(){
    this.setTab()
  }

  handleChange(value){
    this.setState({
      initalTab: value
    });
  }

  render() {
    return (
      <Tabs
        value={this.state.initalTab}
        onChange={this.handleChange}
      >
        <Tab
          value='0'
          label="News Sport"
          containerElement={<IndexLink to='/'></IndexLink>}
        >
        </Tab>
        <Tab
          value='1'
          label="Notes"
          containerElement={<Link to="/notes" activeClassName="active"></Link>}
        >
        </Tab>
        <Tab
            value='2'
            label="Finance"
            containerElement={<Link to="/finance" activeClassName="active"></Link>}
        />
      </Tabs>
    );
  }
}

export default Header;
