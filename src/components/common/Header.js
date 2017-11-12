import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

class Header extends Component {
  constructor(props) {
    super(props);

    switch (window.location.pathname) {
      case '/about':
        this.state = {initalTab: 1};
        break;
      case '/notes':
        this.state = {initalTab: 2};
        break;
      default:
        this.state = {initalTab: 0};
        break;
    }
  }

  render() {
    return (
      <Tabs initialSelectedIndex={this.state.initalTab}>
        <Tab
          label="Home"
          containerElement={<IndexLink to='/'></IndexLink>}
        >
        </Tab>
        <Tab
          label="About"
          containerElement={<Link to="about" activeClassName="active"></Link>}
        >
        </Tab>
        <Tab
          label="Notes"
          containerElement={<Link to="notes" activeClassName="active"></Link>}
        >
        </Tab>
      </Tabs>
    );
  }
}

export default Header;
