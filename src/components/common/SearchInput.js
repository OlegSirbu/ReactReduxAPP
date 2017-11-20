import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class SearchInput extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      searchText: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.dataSource.length !== nextProps.dataSource.length) {
      const names = nextProps.dataSource.map((item)=>{return item.title});
      this.setState({names: Object.assign([], names)});
    }
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText
    });
  };

  handleNewRequest = (targetValue) => {
    this.props.onSelect(targetValue);
    this.setState({
      searchText: ''
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          fullWidth={true}
          hintText="Search"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={this.props.dataSource}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}
