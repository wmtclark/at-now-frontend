import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line react/no-unused-state
    this.state = { searchterm: '' };
  }

  // eslint-disable-next-line class-methods-use-this
  onInputChange = (event) => {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <input id="search-bar" onChange={this.onInputChange} value={this.state.searchterm} />
      </div>
    );
  }
}

export default SearchBar;
