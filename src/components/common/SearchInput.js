import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class SearchInput extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      dataSource: props.dataSource || []
    };
  }
  render() {
    return (
      <div>
        <AutoComplete
          fullWidth={true}
          hintText="Search"
          searchText={this.props.searchText}
          onUpdateInput={this.props.handleUpdateInput}
          onNewRequest={this.props.handleNewRequest}
          dataSource={this.state.dataSource}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}
