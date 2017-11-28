import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class SearchInput extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      searchText: '',
      dataSource: props.dataSource || []
    };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  handleUpdateInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleNewRequest(targetValue) {
    this.props.onSelect(targetValue);
    this.setState({
      searchText: ''
    });
  }

  render() {
    return (
      <div>
        <AutoComplete
          fullWidth={true}
          hintText="Search"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={this.state.dataSource}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}
